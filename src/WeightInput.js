import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles.js'; // Ensure this path is correct


// Reusable Input Component
const WeightInput = ({ actualWeight, setActualWeight }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Enter Actual Weight (optional):</Text>
      <TextInput
        style={styles.input}
        placeholder="Actual weight"
        placeholderTextColor="#B0B0B0" // Set the color of the placeholder text
        value={actualWeight}
        onChangeText={(text) => {
          
          const numericValue = text.replace(/[^0-9.]/g, '');
          const decimalCount = (numericValue.match(/\./g) || []).length;

          
          if (decimalCount <= 1) {
            setActualWeight(numericValue);
          }
        }}
        keyboardType="numeric" 
      />

    </View>
  );
};



export default WeightInput;
