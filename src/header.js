import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js'; // Ensure the path is correct

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/Frame2assets/cowicon.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={30} color="#FFD700" /> {/* Use 'bars' instead of 'menu' */}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
