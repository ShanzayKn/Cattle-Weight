// src/firebaseFunctions.js

import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Function to upload image and metadata
const uploadImageAndMetadata = async (imageFile, metadata) => {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    const response = await fetch(imageFile.uri);
    const blob = await response.blob(); // Convert image URI to blob

    await uploadBytes(storageRef, blob); // Upload the blob to storage
    const imageUrl = await getDownloadURL(storageRef);
    
    // Add image URL to metadata
    metadata.image = imageUrl;

    // Add metadata to Firestore
    const docRef = await addDoc(collection(db, 'cattleData'), metadata);
    console.log('Document written with ID: ', docRef.id);
};

// Function to fetch all metadata
const fetchMetadata = async () => {
    const querySnapshot = await getDocs(collection(db, 'cattleData'));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
};

export { uploadImageAndMetadata, fetchMetadata };
