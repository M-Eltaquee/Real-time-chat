// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXJ9d8IqbipS7MlEvzW-j13sy4vMlNnfU',
  authDomain: 'realtime-chat-472a4.firebaseapp.com',
  projectId: 'realtime-chat-472a4',
  storageBucket: 'realtime-chat-472a4.appspot.com',
  messagingSenderId: '257385143824',
  appId: '1:257385143824:web:f6804de4b3d91722f37495',
  measurementId: 'G-GMYCGGWQEZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;
