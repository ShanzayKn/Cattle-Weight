import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import guidestyles from '../styles/guidelinesStyles.js'; // Adjust the path to your new guidestyles file
const GuidelinesPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  let generatePdf = async () => {
    try {
      const asset = Asset.fromModule(require('../assets/guidelines_assets/guidlinetoshow.png'));
      await asset.downloadAsync();
      const imageBase64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

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
                width: 100%;
                height: auto;
              }
            </style>
          </head>
          <body>
            <img src="data:image/png;base64,${imageBase64}" alt="Guideline Image" />
          </body>
        </html>
      `;
      const file = await printToFileAsync({
        html: html,
        base64: false,
      });

      await shareAsync(file.uri, {
        UTI: 'com.adobe.pdf',
        mimeType: 'application/pdf',
        dialogTitle: 'Share PDF',
        filename: 'Guideline.pdf',
      });

      Alert.alert('Success', 'PDF Successfully Generated');
    } catch (error) {
      Alert.alert('Error', 'Error Generating PDF');
      console.error("Error generating PDF: ", error);
    }
  };

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={guidestyles.container}>
      <View style={guidestyles.contentContainer}>
        <Text style={guidestyles.guidelineText}>Guidelines for Weight Estimation</Text>
        <Image
          source={require('../assets/guidelines_assets/guidlinetoshow.png')}
          style={guidestyles.guidelineIcon}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={guidestyles.downloadButton}
          onPress={generatePdf}
        >
          <Text style={guidestyles.downloadButtonText}>Download Guidelines as PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={guidestyles.viewDisclaimerButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={guidestyles.viewDisclaimerButtonText}>View Disclaimer</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={guidestyles.modalOverlay}>
          <View style={guidestyles.modalContainer}>
            <Text style={guidestyles.modalTitle}>Guidelines Disclaimer</Text>
            <ScrollView contentContainerStyle={guidestyles.modalScrollContent} showsVerticalScrollIndicator={true}>
              <Text style={guidestyles.guidelineModalText}>
                To accurately predict the cow’s weight, please follow the steps below:
              </Text>
              <Text style={guidestyles.stepText}>
                1. <Text style={guidestyles.boldText}>Download the Marker Image</Text>: Click the "Download" button below to get the image.
              </Text>
              <Text style={guidestyles.stepText}>
                2. <Text style={guidestyles.boldText}>Position the Image</Text>: Place the downloaded image at the center of the cow’s body. Make sure the entire marker is visible.
              </Text>
              <Text style={guidestyles.stepText}>
                3. <Text style={guidestyles.boldText}>Take a Picture</Text>: Once positioned, take a clear picture of the cow with the marker in the frame.
              </Text>
              <Text style={guidestyles.stepText}>
                4. <Text style={guidestyles.boldText}>Upload for Prediction</Text>: Upload the picture for analysis, and the system will estimate the cow's weight.
              </Text>
              <Text style={guidestyles.stepText}>
                For best results, ensure the cow is standing straight, and avoid obstructions in the photo.
              </Text>
            </ScrollView>

            <TouchableOpacity
              style={guidestyles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={guidestyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default GuidelinesPage;
