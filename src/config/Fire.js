import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyD_zfsIucYr3llLr-h3IdhEczrwJYNNkkI",
  authDomain: "users-96301.firebaseapp.com",
  projectId: "users-96301",
  storageBucket: "users-96301.appspot.com",
  messagingSenderId: "717677625815",
  appId: "1:717677625815:web:e5de2910a7b12bc4f14b92",
  measurementId: "G-DVKLK724LX"
};



const fire = firebase.initializeApp(config);
export default fire;

