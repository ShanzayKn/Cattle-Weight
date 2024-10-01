import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadPage from './UploadPage'; // Ensure the correct path
import GuidelinesPage from './GuidelinesPage'; // Ensure the correct path
import AboutPage from './AboutPage'; // Ensure the correct path
import PredictionScreen from './PredictionScreen';
import ErrorPage from './ErrorPage';
import ResultsPage from './ResultsPage';

const Drawer = createDrawerNavigator();

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

export default DrawerNavigation;
