import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct
import WeightInput from './WeightInput.js'; // Adjust the path as needed
import axios from 'axios';

const ResultsPage = ({ route }) => {
  const { imageUri, p_weight } = route.params || {};
  console.log('Received imageUri in ResultsPage:', imageUri); // Debugging log
  const [actualWeight, setActualWeight] = useState(''); // Define state for actualWeight

  const sendToBackend = async () => {
    // Check if actualWeight is not empty or null
    if (actualWeight !== null && actualWeight.trim() !== '') {
      try {
        const response = await axios.post(
          'http://192.168.100.52:5000/test',
          { actualWeight }, // Sending the actual weight in the request body as an object
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
  
        Alert.alert('Success', 'Weight is noted for model betterment');
        setActualWeight('');
      } catch (error) {
        console.error('Error sending weight to backend:', error);
        Alert.alert('Error', 'Error sending weight to backend.');
      }
    } else {
      Alert.alert('Error', 'Weight is required');
    }
  };
  

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      <View style={styles.contentContainer}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.text}>No image provided</Text>
        )}
        <Text style={styles.resultDetails}>Predicted Weight: {p_weight}</Text>
      </View>
      
      <Text style={styles.inputLabel}>Enter Actual Weight (optional):</Text>
      <TextInput
        style={styles.input}
        value={actualWeight}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9.]/g, '');
          const decimalCount = (numericValue.match(/\./g) || []).length;

          
          if (decimalCount <= 1) {
            setActualWeight(numericValue);
          }
        }}
        keyboardType="numeric" // Shows the numeric keyboard on mobile devices
        placeholder="Enter a number"
      />
      
        <TouchableOpacity
          style={styles.button} 
          onPress={sendToBackend}
        >
          <Text style={styles.submitbutton}>Submit Actual Weight</Text>
        </TouchableOpacity>
      
    </LinearGradient>
  );
};

export default ResultsPage;
