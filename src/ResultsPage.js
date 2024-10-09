import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js';
import axios from 'axios';

const ResultsPage = ({ route }) => {
  const { imageUri, p_weight } = route.params || {};
  const [actualWeight, setActualWeight] = useState('');
  const [loading, setLoading] = useState(false);

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
      Alert.alert('Success', 'Weight is noted for model betterment');
      setActualWeight('');
    } catch (error) {
      console.error('Error sending weight to backend:', error);
      Alert.alert('Error', 'Error sending weight to backend.');
    } finally {
      setLoading(false);
    }
  };

  const formatWeightRange = (weight) => {
    if (!weight) return Math.round(weight);
    const lowerBound = Math.round(weight / 40);
    const upperBound = Math.round(weight / 40 + 1);
    return `${lowerBound} - ${upperBound}`;
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
          Predicted Weight(maund): {formatWeightRange(p_weight)} 
        </Text>
        {/* <Text style={styles.resultDetails}>
          Predicted Weight(kg): {p_weight?.toFixed(2)}
        </Text> */}
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
