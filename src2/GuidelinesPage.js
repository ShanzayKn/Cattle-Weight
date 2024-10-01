// GuidelinesPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles.js'; // Adjust the path to your styles file

const GuidelinesPage = ({ navigation }) => (
  <LinearGradient
    colors={['#459877', '#132B22']}
    style={styles.container}
  >
    <View style={styles.header}>
      <Image source={require('../assets/Frame2assets/cowicon.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#FFD700" />
      </TouchableOpacity>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Guidelines Contentttttt</Text>
      <Image
        source={require('../assets/guidelines_assets/Vector (3).png')}
        style={styles.vectorIcon}
        resizeMode="contain"
      />
    </View>
  </LinearGradient>
);

export default GuidelinesPage;
