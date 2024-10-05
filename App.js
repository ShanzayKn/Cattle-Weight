import * as React from 'react';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { uploadImageAndMetadata, fetchMetadata } from './src/firebaseFunctions'; // Ensure these are implemented

// Import your screens  xxxx
import Frame from './src/Frame';
import UploadPage from './src/UploadPage'; // Ensure the correct path

import PredictionScreen from './src/PredictionScreen';
import ErrorPage from './src/ErrorPage';

import DrawerNavigation from './src/DrawerNavigation';

const Stack = createNativeStackNavigator();
// Main App Navigation Setup
const App = () => {
  const [data, setData] = useState([]);

  // Fetch all metadata on component mount
  const fetchAllData = async () => {
    try {
      const fetchedMetadata = await fetchMetadata();
      setData(fetchedMetadata);
    } catch (error) {
      console.error("Error fetching metadata: ", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,  }}>
        
        <Stack.Screen name="Frame" component={Frame} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="PredictionScreen" component={PredictionScreen} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} />
        {/* <Stack.Screen name="Test" component={Test} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
