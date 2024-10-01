import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct

const { width, height } = Dimensions.get('window');

const Frame = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Drawer', {
        screen: 'Upload',
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#459877', '#132B22']}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.finallogo}
        />
        <Image
          source={require('../assets/Weigh-Your-Cow.png')}
          style={styles.wyc}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/Frame_assets/Vector.png')}
          style={styles.vectorIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/Frame_assets/Blob.png')}
          style={styles.BlobIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/Frame_assets/Vector (1).png')}
          style={styles.vectorIcon1}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default Frame;
