import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles.js'; // Ensure the path is correct

const ErrorPage = ({ route, navigation }) => {
  const { imageUri } = route.params || {}; 

  console.log('Received imageUri in ErrorPage:', imageUri); // Debugging log
  
  return (
    <LinearGradient
      colors={['#459877', '#132B22']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.textt}>Markers not found</Text>

       {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image} // Ensure this style is correctly defined in your styles
          resizeMode="contain" // Adjust as needed for better image display
        />
      ) : (
        <Text style={styles.text}>No image provided</Text>
      )}
 <Text style={styles.textt}>It looks like our model could not detect the markers. </Text>
 <Text style={styles.textt}>Please review the guidelines and try again.</Text>
 

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.guidelineButton}
            onPress={() => navigation.navigate('Guidelines')}
          >
            <Text style={styles.buttonText}>Guidelines for Annotations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.navigate('Upload')}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </LinearGradient>
  );
};

export default ErrorPage;
