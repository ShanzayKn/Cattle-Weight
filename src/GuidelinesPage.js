import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Adjust the path to your styles file
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const GuidelinesPage = ({ navigation }) => {
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
        <TouchableOpacity style={styles.downloadButton} onPress={generatePdf}>
          <Text style={styles.buttonText}>Generate PDF</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default GuidelinesPage;
