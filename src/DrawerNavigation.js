import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import UploadPage from './UploadPage'; 
import GuidelinesPage from './GuidelinesPage';
import AboutPage from './AboutPage'; 
import PredictionScreen from './PredictionScreen';
import ErrorPage from './ErrorPage';
import ResultsPage from './ResultsPage';
import CustomHeader from './header'; // Import the custom header

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent', // Allow background to show gradient
          width: 240,
          top:30,
          borderTopRightRadius: 20, // Rounded corners
          borderBottomRightRadius: 20, // Rounded corners
          overflow: 'hidden', // Prevent overflow due to rounded corners
        },
        headerStyle: {
          backgroundColor: '#132B22', // Background color for headers
        },
        headerTintColor: '#FFD700', // Text color for the header
        headerTitleStyle: {
          fontWeight: 'bold', // Bold header title
        },
        drawerActiveTintColor: '#FFD700', // Color for active drawer item
        drawerLabelStyle: {
          color: '#FFFFFF', // Color for drawer item text
          fontSize: 18, // Font size for drawer item text
          paddingVertical: 10, // Vertical padding for better touch targets
        },
      }}
    >
      <Drawer.Screen
        name="Upload"
        component={UploadPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="upload" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>Home</Text>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Guidelines"
        component={GuidelinesPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="book" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>Guidelines</Text>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="PredictionScreen"
        component={PredictionScreen}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="line-chart" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>Prediction</Text>
            </View>
          ),
        })}
      />
      {/* <Drawer.Screen
        name="ErrorPage"
        component={ErrorPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="exclamation-circle" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>Error</Text>
            </View>
          ),
        })}
      /> */}
      <Drawer.Screen
        name="ResultsPage"
        component={ResultsPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="check-circle" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>Results</Text>
            </View>
          ),
        })}
      />
        <Drawer.Screen
        name="About"
        component={AboutPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
          drawerLabel: () => (
            <View style={styles.drawerItemContainer}>
              <Icon name="info-circle" size={24} color="#FFD700" style={styles.icon} />
              <Text style={styles.drawerItem}>About</Text>
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

// Styles for the drawer items
const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: 10, // Padding around each drawer item
  },
  drawerItem: {
    color: '#FFFFFF', // Text color for drawer items
    fontSize: 18, // Font size for drawer items
    marginLeft: 10, // Margin to the left of the icon
  },
  icon: {
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1, // Shadow radius
  },
});

// Background gradient (You can implement this using a library like 'react-native-linear-gradient')
const GradientBackground = () => {
  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        colors={['#132B22', '#459877']}
        style={styles.gradientBackground}
      />
    </View>
  );
};

export default DrawerNavigation;
