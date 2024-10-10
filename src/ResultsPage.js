import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js';
import axios from 'axios';
import { uploadImageAndMetadata } from './firebaseFunctions.js';

const ResultsPage = ({ route }) => {
  const { imageUri, p_weight } = route.params || {};
  const [actualWeight, setActualWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const [lowerBound, setlowerBound] = useState(null);
  const [upperBound, setupperBound] = useState(null);
  
  useEffect(() => {
    if (p_weight) {
      setlowerBound((p_weight - 30) / 40);
      setupperBound((p_weight + 30) / 40);
    }
  }, [p_weight]);

  const metadata = {
    uploadedAt: new Date().toISOString(),
    description: 'Cow image for weight prediction',
  };

  const handleInputChange = (text) => {
    const numericValue = text.replace(/[^0-9.]/g, '');
    // Allow only one decimal point
    if ((numericValue.match(/\./g) || []).length <= 1) {
      setActualWeight(numericValue);
    }
  };

  const sendToBackend = async () => {
    if (!actualWeight.trim()) {
      return Alert.alert('Error', 'Weight is required');
    }

    setLoading(true);
    try {
      await axios.post(
        'http://68.183.233.127:5000/test',
        { actualWeight },
        { headers: { 'Content-Type': 'application/json' } }
      );

      uploadImageAndMetadata(imageUri, metadata, lowerBound, upperBound, actualWeight);

      Alert.alert('Success', 'Weight is noted for model betterment');
      setActualWeight('');
    } catch (error) {
      console.error('Error sending weight to backend:', error);
      Alert.alert('Error', 'Error sending weight to backend.');
    } finally {
      setLoading(false);
    }
  };

  console.log("lowerBound values:", lowerBound);
  console.log("upperBound values:", upperBound);

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
          Predicted Weight (maund): {lowerBound} - {upperBound}
        </Text>
      </View>

      <Text style={styles.inputLabel}>Enter Actual Weight In Maund (optional):</Text>
      <TextInput
        style={styles.input}
        value={actualWeight}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder="Enter a number"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <TouchableOpacity style={styles.submitbutton} onPress={sendToBackend}>
          <Text style={styles.submittext}>Submit Actual Weight</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default ResultsPage;
