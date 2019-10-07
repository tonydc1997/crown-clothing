import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD9n33tVMg9H66tvZNZX6tl_yDhkQ1iIMI',
  authDomain: 'crown-db-bab46.firebaseapp.com',
  databaseURL: 'https://crown-db-bab46.firebaseio.com',
  projectId: 'crown-db-bab46',
  storageBucket: '',
  messagingSenderId: '242184251880',
  appId: '1:242184251880:web:65b711a67d0979085edc5d',
  measurementId: 'G-X5F3SL7NS4',
};

firebase.initializeApp(config);
