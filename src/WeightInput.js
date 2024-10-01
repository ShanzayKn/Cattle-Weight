import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
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
        onChangeText={setActualWeight} // Update the state on input change
        keyboardType="numeric" // Numeric keyboard for weight input
      />
    </View>
  );
};



export default WeightInput;
