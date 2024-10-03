// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Test = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to pick an image from the gallery
  const pickImage = async () => {
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

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);  // Set the image URI
    }
  };

  // Function to upload the image using axios
  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert('No Image Selected', 'Please select an image before uploading.');
      return;
    }

    try {

      const imageFile = {
        uri: selectedImage,
        name: selectedImage.split('/').pop(),  // Extract the image name from the URI
        type: 'image/jpeg',  // Assuming the image type is JPEG
      };
      const base64Data = imageFile.uri.split(',')[1];  // Extract everything after the comma
      // console.log(base64Data)
      const image = {
        image: base64Data
      }
      console.log(image)
      // Make the POST request with axios
      const response = await axios.post('http://127.0.0.1:5000/predict', image, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      Alert.alert('Success', 'Image uploaded successfully!');

    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Upload Failed', 'Something went wrong while uploading the image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload an Image</Text>

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Pick Image from Gallery</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <TouchableOpacity onPress={uploadImage} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}  // Navigating to a screen called "Details"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default Test;
