import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles.js'; 

const PredictionScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageUri } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const performPrediction = async () => {
      try {
        // Simulate prediction process
        const result = Math.random() > 0.5; // Simulate random success/failure

        if (result) {
          // Navigate to ResultsPage on success
          navigation.navigate('ResultsPage', { imageUri });
        } else {
          // Navigate to ErrorPage on failure
          setHasError(true);
          navigation.navigate('ErrorPage', { imageUri });
        }
      } catch (error) {
        setHasError(true);
        navigation.navigate('ErrorPage', { imageUri });
      } finally {
        setIsLoading(false);
      }
    };

    performPrediction();
  }, [imageUri, navigation]);

  return (
    <View style={styles.pscontainer}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image} 
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.text}>No image provided</Text>
      )}
      <View style={styles.loaderContainer}>
        {isLoading ? <ActivityIndicator size="large" color="#FFD700" /> : null}
        {hasError ? <Text style={styles.errorText}>Error during prediction.</Text> : null}
      </View>
    </View>
  );
};

export default PredictionScreen;
