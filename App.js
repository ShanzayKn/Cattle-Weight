import * as React from 'react';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { uploadImageAndMetadata,fetchMetadata } from './src/firebaseFunctions'; // Ensure these are implemented

// Import your screens
import Frame from './src/Frame';
import UploadPage from './src/UploadPage'; // Ensure the correct path
import GuidelinesPage from './src/GuidelinesPage'; // Ensure the correct path
import AboutPage from './src/AboutPage'; // Ensure the correct path
import PredictionScreen from './src/PredictionScreen';
import ErrorPage from './src/ErrorPage';
import ResultsPage from './src/ResultsPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigation Setup
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Upload" component={UploadPage} />
      <Drawer.Screen name="Guidelines" component={GuidelinesPage} />
      <Drawer.Screen name="About" component={AboutPage} />
      <Drawer.Screen name="PredictionScreen" component={PredictionScreen} />
      <Drawer.Screen name="ErrorPage" component={ErrorPage} />
      <Drawer.Screen name="ResultsPage" component={ResultsPage} />
    </Drawer.Navigator>
  );
};

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Frame" component={Frame} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="PredictionScreen" component={PredictionScreen} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} />
      </Stack.Navigator>
      {/* Optionally, you can render fetched metadata here if needed */}
      {/* <YourMetadataDisplayComponent data={data} /> */}
    </NavigationContainer>
  );
};

export default App;
