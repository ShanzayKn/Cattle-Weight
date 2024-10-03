// GuidelinesPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles/styles.js'; // Adjust the path to your styles file

const GuidelinesPage = ({ navigation }) => (
  <LinearGradient
    colors={['#459877', '#132B22']}
    style={styles.container}
  >
    <View style={styles.contentContainer}>
      <Text style={styles.guidlinetext}>Guidelines Content</Text>
      <Image
        source={require('../assets/guidelines_assets/Vector (3).png')}
        style={styles.vectorIcon}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/guidelines_assets/guidlinetoshow.png')}
        style={styles.guidlineicon}
        resizeMode="contain"
      />
       <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => navigation.navigate('Upload')}
          >
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
    </View>
  </LinearGradient>
);

export default GuidelinesPage;
