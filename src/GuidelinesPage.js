// GuidelinesPage.js
import React from 'react';
import { View, Text, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Adjust the path to your styles file

const GuidelinesPage = ({ navigation }) => (
  <LinearGradient
    colors={['#459877', '#132B22']}
    style={styles.container}
  >
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Guidelines Content</Text>
      <Image
        source={require('../assets/guidelines_assets/Vector (3).png')}
        style={styles.vectorIcon}
        resizeMode="contain"
      />
    </View>
  </LinearGradient>
);

export default GuidelinesPage;
