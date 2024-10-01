import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct
import WeightInput from './WeightInput.js'; // Adjust the path as needed
import { useState } from 'react';

const ResultsPage = ({ route }) => {
  const { imageUri } = route.params || {};
  console.log('Received imageUri in ResultsPage:', imageUri); // Debugging log
  const [actualWeight, setActualWeight] = useState(''); // Define state for actualWeight

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      <View style={styles.header}>
        {/* Add header content if needed */}
      </View>

      <View style={styles.contentContainer}>
        
        
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.image} // Ensure this style is defined in your styles
            resizeMode="contain" // Adjust as needed for better image display
          />
        ) : (
          <Text style={styles.text}>No image provided</Text>
        )}
        
        {/* Add more result details here */}
        <View style={styles.resultDetails}>
        <Text style={styles.resultDetails}>Prediction Result</Text>
          <Text style={styles.resultDetails}>   Weight:</Text>
          {/* Display additional result details here */}
        </View>
      </View>
      <View>

        {/* Use the WeightInput component */}
        <WeightInput actualWeight={actualWeight} setActualWeight={setActualWeight} />

    
      </View>
     
      
    </LinearGradient>
  );
};



export default ResultsPage;
