import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct
import axios from 'axios';

const ResultsPage = ({ route }) => {
  const { imageUri, p_weight } = route.params || {};
  console.log('Received imageUri in ResultsPage:', imageUri); // Debugging log
  const [actualWeight, setActualWeight] = useState('');
  const [loading, setLoading] = useState(false); // State for managing loader visibility

  const sendToBackend = async () => {
    // Check if actualWeight is not empty or null
    if (actualWeight !== null && actualWeight.trim() !== '') {
      setLoading(true); // Show the loader
      try {
        const response = await axios.post(
          'http://192.168.8.106:5000/test',
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
      } finally {
        setLoading(false); // Hide the loader
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
        <Text style={styles.resultDetails}>
          Predicted Weight: {(p_weight !== 0) ? (p_weight / 40)?.toFixed(2) : p_weight?.toFixed(2)} maund
        </Text>
      </View>
      <Text style={styles.inputLabel}>Enter Actual Weight In Maund (optional):</Text>
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
        keyboardType="numeric"
        placeholder="Enter a number"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={sendToBackend}
        >
          <Text style={styles.submitbutton}>Submit Actual Weight</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default ResultsPage;
