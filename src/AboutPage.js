// AboutPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles.js'; // Ensure this path is correct

const AboutPage = ({ navigation }) => (
  <LinearGradient
    colors={['#459877', '#132B22']}
    style={styles.container}
  >
    <View style={styles.contentContainer}>
      <Text style={styles.text}>About Content</Text> 
    </View>
  </LinearGradient>
);

export default AboutPage;
