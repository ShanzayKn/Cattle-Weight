import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct
import WeightInput from './WeightInput.js'; // Adjust the path as needed
import { useState } from 'react';

const ResultsPage = ({ route }) => {
  const { imageUri,p_weight } = route.params || {};
  console.log('Received imageUri in ResultsPage:', imageUri); // Debugging log
  const [actualWeight, setActualWeight] = useState(''); // Define state for actualWeight

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
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
          <Text style={styles.resultDetails}>Predicted Weight: {p_weight}</Text>
          {/* Display additional result details here */}
      </View>
      <View>
        {/* Use the WeightInput component */}
        <WeightInput actualWeight={actualWeight} setActualWeight={setActualWeight} />
      </View>
    </LinearGradient>
  );
};



export default ResultsPage;
