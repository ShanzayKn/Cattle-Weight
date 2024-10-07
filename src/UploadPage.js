import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import { uploadImageAndMetadata } from './firebaseFunctions.js';
import styles from '../styles/styles.js';
import axios from 'axios';

const UploadPage = () => {
  const navigation = useNavigation();
  const [loadingState, setLoadingState] = useState({ isLoading: false, loadingText: 'Loading' });

  const pickImage = async (source) => {
    try {
      const permissionMethod =
        source === 'gallery'
          ? ImagePicker.requestMediaLibraryPermissionsAsync
          : ImagePicker.requestCameraPermissionsAsync;
  
      const { status } = await permissionMethod();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', `You need to allow ${source} permissions to upload images.`);
        return;
      }
  
      const pickerMethod =
        source === 'gallery' ? ImagePicker.launchImageLibraryAsync : ImagePicker.launchCameraAsync;
  
      const result = await pickerMethod({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true, // Enable base64 in the picker options
      });
  
      if (!result.canceled && result.assets) {
        handleUpload(result.assets[0]);
      }
    } catch (error) {
      console.error(`Error picking image from ${source}:`, error);
      Alert.alert('Error', `Error picking image from ${source}.`);
    }
  };

  useEffect(() => {
    let animationInterval;
    if (loadingState.isLoading) {
      animationInterval = setInterval(() => {
        setLoadingState((prev) => ({
          ...prev,
          loadingText: prev.loadingText === 'Loading...'
            ? 'Loading'
            : prev.loadingText + '.',
        }));
      }, 500);
    } else {
      clearInterval(animationInterval);
    }
    return () => clearInterval(animationInterval);
  }, [loadingState.isLoading]);

  const handleUpload = async (image) => {
    setLoadingState({ isLoading: true, loadingText: 'Loading' });
  
    const metadata = {
      uploadedAt: new Date().toISOString(),
      description: 'Cow image for weight prediction',
    };
  
    const imageFile = {
      uri: image.uri,
      name: image.uri.split('/').pop() || 'uploaded_image.jpg',
      type: 'image/jpeg',
    };
  
    const base64Data = image.base64; // Use base64 from the image picker result
    const imagePayload = { image: base64Data };
  
    try {
      await uploadImageAndMetadata(imageFile, metadata);
      await sendToBackend(imagePayload, imageFile.uri);
    } catch (error) {
      console.error('Error during image upload:', error);
      Alert.alert('Error', 'Error during image upload.');
    } finally {
      setLoadingState({ isLoading: false, loadingText: 'Loading' });
    }
  };

  const sendToBackend = async (imagePayload, imageUri) => {
    // console.log("image: ",imagePayload)
    try {
      const response = await axios.post(
        'http://192.168.100.52:5000/predict',
        imagePayload,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      
      navigation.navigate('PredictionScreen', {
        imageUri,
        p_weight: response.data.predicted_weight,
      });
    } catch (error) {
      console.error('Error sending image to backend:', error);
      Alert.alert('Error', 'Error sending image to backend.');
    }
  };

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      {loadingState.isLoading ? (
        <>
          <LottieView
            source={require('../assets/loader.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.loading}>{loadingState.loadingText}</Text>
        </>
      ) : (
        <>
          <Text style={styles.asktitle}>How would you like to upload your image?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.iconButton, styles.cameraButton]}
              onPress={() => pickImage('camera')}
              activeOpacity={0.7}
            >
              <Icon name="camera-outline" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, styles.galleryButton]}
              onPress={() => pickImage('gallery')}
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
          <Image
            source={require('../assets/Frame2assets/Subtract.png')}
            style={styles.blobIcon}
            resizeMode="contain"
          />
        </>
      )}
    </LinearGradient>
  );
};

export default UploadPage;
