import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { uploadImageAndMetadata } from './firebaseFunctions.js'; // Import Firebase function
import styles from '../styles/styles.js'; // Ensure the path is correct
import axios from 'axios';

const UploadPage = () => {
  const navigation = useNavigation();

  // Function to upload image and metadata to Firebase and backend
  const handleUpload = async (image) => {
    const metadata = {
      uploadedAt: new Date().toISOString(),
      description: 'Cow image for weight prediction',
    };

      const imageFile = {
        uri: image.uri,
        name: image.uri.split('/').pop() || 'uploaded_image.jpg', // Get the file name
        type: 'image/jpeg',  // Assuming the image type is JPEG
      };
       const base64Data = imageFile.uri.split(',')[1];  // Extract everything after the comma
      // console.log(base64Data)
      const image_b = {
        image: base64Data
      }
    try {
      // Upload the image and metadata to Firebase
      await uploadImageAndMetadata(imageFile, metadata);

      // Send the image URI to the backend (Flask) for prediction
      await sendToBackend(image_b,imageFile.uri);

      
    } catch (error) {
      console.error('Error during image upload:', error); 
    }
  };

  // Function to send the image URI to the backend for processing
  const sendToBackend = async (image_b,imageUri) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', image_b, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    // Navigate to the prediction screen
      navigation.navigate('PredictionScreen', { imageUri: imageUri, p_weight:response.data.predicted_weight });
      // console.log(response.data.predicted_weight);  // Handle the response (e.g., show result to user)
    } catch (error) {
      // console.log(imageFile)
      console.error('Error sending image to backend:', error);
    }
  };

  // Function to pick image from the gallery
  const pickImageFromGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to allow gallery permissions to upload images.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        handleUpload(result.assets[0]); // Call handleUpload with the selected image
      }
    } catch (error) {
      console.error('Error picking image from gallery:', error);
    }
  };

  // Function to capture image from the camera
  const pickImageFromCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to allow camera permissions to take a photo.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        handleUpload(result.assets[0]); // Call handleUpload with the captured image
      }
    } catch (error) {
      console.error('Error capturing image from camera:', error);
    }
  };

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
    
      

      <Text style={styles.asktitle}>How would you like to upload your image?</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.iconButton, styles.cameraButton]}
          onPress={pickImageFromCamera}
          activeOpacity={0.7}
        >
          <Icon name="camera-outline" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, styles.galleryButton]}
          onPress={pickImageFromGallery}
          activeOpacity={0.7}
        >
          <Icon name="image-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.guidelinebutton}
        onPress={() => navigation.navigate('Guidelines')}
        activeOpacity={0.7}
      >
        <Text style={styles.guidelineText}>Guidelines for Annotations</Text>
      </TouchableOpacity>

      <Image source={require('../assets/Frame2assets/Subtract.png')} style={styles.blobIcon} resizeMode="contain" />
    </LinearGradient>
  );
};

export default UploadPage;
