import { StyleSheet } from 'react-native';

const guidelinesStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  guidelineText: {
    textAlign: 'center', // Centers text horizontally
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for a bright look
    marginBottom: 20,
  },
  
  guidelineIcon: {
    width: '90%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  downloadButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewDisclaimerButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  viewDisclaimerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalScrollContent: {
    paddingVertical: 10,
  },
  guidelineModalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  stepText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default guidelinesStyles;
