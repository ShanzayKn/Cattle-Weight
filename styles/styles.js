import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
     flex: 1, // Use flex to make the container adapt to the screen size
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: width * 0.05, // 5% padding
    position: 'absolute',
    top: 15,
    zIndex: 1,
  },
  logo: {
    width: width * 0.1, // 10% of screen width
    height: width * 0.1, // Maintain aspect ratio
    marginLeft: -width * 0.03, // Adjust if needed
  },
  finallogo: {
    width: width * 0.5, // 10% of screen width
    height: width * 0.5, // Maintain aspect ratio
    marginLeft: -width * 0.05,
     // Adjust if needed
  },
  wyc: {
    width: width * 0.5, // 50% of screen width
    height: width * 0.5, // Maintain aspect ratio
    marginLeft: -width * 0.05, // Adjust horizontal position if needed
    position: 'absolute', // Ensure it's positioned absolutely
    bottom: height * 0.08, //
  },
  logops: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.1, // Maintain aspect ratio
    marginLeft: -width * 0.1, // Adjust if needed
  },
  title: {
    fontSize: width * 0.05, // Scalable font size
    color: '#FFD700',
    marginBottom: height * 0.02, // 2% margin
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: height * 0.02, // 2% margin
  },
  iconButton: {
    backgroundColor: '#4A8F74',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
  },
  cameraButton: {
    marginRight: -width * 0.05, // Adjust as needed
  },
  galleryButton: {
    marginLeft: width * 0.05, // 5% margin
  },
  guidelineButton: {
    alignSelf: 'center',
    marginTop: height * 0.02, // 2% margin
    backgroundColor: '#4A8F74',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
    width: '100%',
  },
  guidelineText: {
    color: '#FFD700',
    fontSize: width * 0.05, // Scalable font size
    fontWeight: 'bold',
  },
  guidlinemodaltext: {
    color: '#FFD700',
    fontSize: width * 0.05, // Scalable font size
    fontWeight: 'bold',
  },
  initiateButton: {
    marginTop: height * 0.02, // 2% margin
    backgroundColor: '#FFD700',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
  },
  initiateText: {
    color: '#2E7D46',
    fontSize: width * 0.04, // Scalable font size
  },
  blobIcon: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.25, // 25% of screen height
    position: 'absolute',
    bottom: -9,
    left: -width * 0.1, // Adjust if needed
  },
  BlobIcon: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.7, // 25% of screen height
    position: 'absolute',
    bottom: -9,
    left: -width * 0.4, // Adjust if needed
  },
  vector5: {
    width: width * 0.4, // 40% of screen width
    height: height * 0.25, // 25% of screen height
    position: 'absolute',
    bottom: -height * 0.05, // Adjust if needed
    left: -width * 0.1, // Adjust if needed
  },
  uploadedImage: {
    width: width * 0.75, // 75% of screen width
    height: width * 0.75, // Maintain aspect ratio
    marginBottom: height * 0.02, // 2% margin
  },
  image: {
    width: width * 0.75, // 75% of screen width
    height: width * 0.75, // Maintain aspect ratio
    marginBottom: height * 0.02, // 2% margin
    borderRadius: width * 0.02, // Rounded corners
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: width * 0.05, // Scalable font size
    color: '#E4A951',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
  guidlinetext: {
    fontSize: width * 0.05, // Scalable font size
    color: '#E4A951',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    marginTop:-200,
  },
  spinner: {
    marginTop: height * 0.02, // 2% margin
  },
  vectorIcon: {
    width: width * 0.5, // 80% of screen width
    height: height * 0.5, // 70% of screen height
    position: 'absolute',
    top: height * 0.01, // 43% from top
    left: -width * 0.5, // Adjust if needed
  },
  guidlineicon: {
    width: width * 0.5, // 80% of screen width
    height: height * 0.5, // 70% of screen height
    position: 'absolute',
    top: 250, // 43% from top
   
  },
  guidlinescreen:{
    width: width * 0.5, // 80% of screen width
    height: height * 0.5, // 70% of screen height
    position: 'absolute',
    top:70
  },
  downloadButton: {
    top: 250,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
  },
  guidlinedownloadButton: {
    top: 450,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
  },
  
  downloadButtonText: {
    color: '#132B22',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guidlinedownloadButtonText: {
    color: '#132B22',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  vectorIcon1: {
    width: width * 0.3, // 80% of screen width
    height: height * 0.3, // 70% of screen height
    position: 'absolute',
    top: height * 0.7, // 43% from top
    left: width * 0.5, // Adjust if needed
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  psvector: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.6, // 60% of screen height
    top: height * 0.52, // 52% from top
    left: width * 0.2, // Adjust if needed
    zIndex: 1,
  },
  pscontainer: {
    width: width * 1.0, // 90% of screen width
    height: height * 1.0, // 90% of screen height
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  errorImage: {
    width: '100%',
    height: height * 0.3, // 30% of screen height
    marginVertical: height * 0.02, // 2% margin
    borderRadius: width * 0.02, // Rounded corners
  },
  buttonContainer: {
    flexDirection: 'column', // Stack buttons vertically
    alignItems: 'center', // Center align buttons horizontally
    width: '100%', // Full width
    paddingHorizontal: width * 0.05, // 5% horizontal padding
  },
  guidelineButton: {
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Rounded corners
    marginBottom: height * 0.02, // 2% space between buttons
    width: '100%', 
  },
  goBackButton: {
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Rounded corners
  },
  DownloadImage: {
    backgroundColor: '#D4E181',
    padding: width * 0.03, // 5% padding
    borderRadius: width * 0.05, // Rounded corners
  },
  buttonText: {
    color: '#000000',
    fontSize: width * 0.04, // Scalable font size
    fontWeight: 'normal',
  },
  resultDetails: {
    marginTop:20,
    fontSize: width * 0.05, // Scalable font size
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.02, // Rounded corners
  },
  textt: {
    fontSize: width * 0.04, // Scalable font size
    color: '#FFFFFF',
    marginBottom: height * 0.015, // 1.5% margin
  },
  inputt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    bottom:100 // Adjust width as needed
  },
  WeightInput: {
    marginTop: -10,
    width: '100%',
    bottom:100 // Adjust width as needed
  },
  inputLabel: {
    fontSize: 16,
    color: '#D4E181', // Adjust text color as needed
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Background color for input
  },
  pdf: {
    flex: 1, // Makes sure the PDF takes up the full available space
    marginTop: 20, // Adjust top margin as needed
  },
  asktitle: {
    fontSize: width * 0.05, // Larger font size for the title
    color: '#FFD700', // White color
    fontWeight: 'bold', // Bold title
    marginTop: height * -0.05, // Negative margin to start higher
    marginBottom: height * 0.02, // Space below the title
    textAlign: 'center', // Centered title
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
      
    },
    modalContainer: {
      width: '90%',
      height: '70%',  // Updated to limit the height for scroll
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      
    },
    modalScrollContent: {
      flexGrow: 1,  // Allows scrolling content to grow
      paddingBottom: 20, // Ensure content is spaced from the bottom
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#132B22',
      marginBottom: 15,
      textAlign: 'center',
    },
    closeButton: {
      backgroundColor: '#FFD700',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 15,
    },
    closeButtonText: {
      color: '#132B22',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default styles;
