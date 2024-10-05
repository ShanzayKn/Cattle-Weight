import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Adjust the path to your styles file
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const GuidelinesPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  let generatePdf = async () => {
    try {
      // Load and resolve the image asset
      const asset = Asset.fromModule(require('../assets/guidelines_assets/guidlinetoshow.png'));
      await asset.downloadAsync(); // Ensure the image is downloaded

      // Convert the image to base64
      const imageBase64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Define the HTML content for the PDF, embedding the base64 image
      const html = `
        <html>
          <head>
            <style>
              body {
                margin: 0;
                padding: 0;
                text-align: center;
                font-family: Arial, sans-serif;
              }
              img {
                width: 100%;  /* Make the image fill the width of the page */
                height: auto; /* Maintain aspect ratio */
              }
            </style>
          </head>
          <body>
            <img src="data:image/png;base64,${imageBase64}" alt="Guideline Image" />
          </body>
        </html>
      `;
      // Generate the PDF from the HTML content
      const file = await printToFileAsync({
        html: html,
        base64: false,
      });

      // Share the PDF with a specified filename
      await shareAsync(file.uri, {
        UTI: 'com.adobe.pdf', // Set the UTI to indicate it's a PDF
        mimeType: 'application/pdf',
        dialogTitle: 'Share PDF',
        filename: 'Guideline.pdf', // Specify the filename here
      });
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.guidlinetext}>Guidelines Content</Text>
        <Image
          source={require('../assets/guidelines_assets/guidlinetoshow.png')}
          style={styles.guidlineicon}
          resizeMode="contain"
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Guidelines Disclaimer</Text>

              {/* Wrap the content in ScrollView */}
              <ScrollView 
                contentContainerStyle={styles.modalScrollContent} // Updated style for scrolling content
                showsVerticalScrollIndicator={true}  // Ensures the scroll indicator is visible
              >
                <Text style={styles.guidlinemodaltext}>
                  To accurately predict the cow’s weight, please follow the steps below:
                </Text>

                <Text style={styles.text}>
                  1. <Text style={{ fontWeight: 'bold' }}>Download the Marker Image</Text>: Click the "Download" button below to get the image.
                </Text>
                <Text style={styles.text}>
                  2. <Text style={{ fontWeight: 'bold' }}>Position the Image</Text>: Place the downloaded image at the center of the cow’s body. Make sure the entire marker is visible.
                </Text>

                <Text style={styles.text}>
                  3. <Text style={{ fontWeight: 'bold' }}>Take a Picture</Text>: Once positioned, take a clear picture of the cow with the marker in the frame.
                </Text>

                <Text style={styles.text}>
                  4. <Text style={{ fontWeight: 'bold' }}>Upload for Prediction</Text>: Upload the picture for analysis, and the system will estimate the cow's weight.
                </Text>

                <Text style={styles.text}>
                  For best results, ensure the cow is standing straight, and avoid obstructions in the photo.
                </Text> 
              </ScrollView>

              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.downloadButton} onPress={generatePdf}>
          <Text style={styles.buttonText}>Download </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.guidlinedownloadButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.downloadButtonText}>View Disclaimer</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default GuidelinesPage;
