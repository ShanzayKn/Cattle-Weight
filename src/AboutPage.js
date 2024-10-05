import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutPage = ({ navigation }) => {
  // Function to handle social media linking
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient
      colors={['#459877', '#132B22']}
      style={styles.container}
    >
      <View style={styles.contentContainer}>

        {/* App Logo or Image */}
        <Image 
          source={require('../assets/icon.png')} // Path to your app logo
          style={styles.logo} 
        />

        {/* App Name and Description */}
        <Text style={styles.title}>My Awesome App</Text>
        <Text style={styles.description}>
          Welcome to My Awesome App! Our mission is to help users easily manage their daily tasks. Explore the features and enjoy the seamless experience!
        </Text>

        {/* Developer/Team Info */}
        <Text style={styles.sectionTitle}>About the Team</Text>
        <Text style={styles.text}>
          Our app is developed by a passionate team of developers dedicated to providing the best user experience.
        </Text>

        {/* Version Info */}
        <Text style={styles.sectionTitle}>App Version</Text>
        <Text style={styles.text}>Version 1.0.0</Text>

        {/* Contact Info */}
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>For inquiries, email us at: support@myawesomeapp.com</Text>

        {/* Social Media Links */}
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => openLink('https://twitter.com/yourprofile')}>
            <Icon name="logo-twitter" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://instagram.com/yourprofile')}>
            <Icon name="logo-instagram" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://facebook.com/yourprofile')}>
            <Icon name="logo-facebook" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Feedback Button */}
        <TouchableOpacity 
          style={styles.feedbackButton} 
          onPress={() => openLink('mailto:support@myawesomeapp.com?subject=App Feedback')}
        >
          <Text style={styles.feedbackButtonText}>Send Feedback</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  feedbackButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  feedbackButtonText: {
    color: '#132B22',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutPage;
