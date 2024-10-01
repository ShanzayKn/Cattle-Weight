// AboutPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles.js'; // Adjust the path to your styles file
///test
const AboutPage = ({ navigation }) => (
  <LinearGradient
    colors={['#459877', '#132B22']}
    style={styles.container}
  >
    <View style={styles.header}>
      <Image source={require('../assets/Frame2assets/cowicon.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color="#FFD700" />
      </TouchableOpacity>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.text}>About Content</Text>
    </View>
  </LinearGradient>
);

export default AboutPage;
