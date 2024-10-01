import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UploadPage from './UploadPage'; // Adjust the path as needed
import GuidelinesPage from './GuidelinesPage';
import AboutPage from './AboutPage';
import PredictionScreen from './PredictionScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="UploadPage" component={UploadPage} />
      <Drawer.Screen name="GuidelinesPage" component={GuidelinesPage} />
      <Drawer.Screen name="AboutPage" component={AboutPage} />
      <Drawer.Screen name="PredictionScreen" component={PredictionScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
