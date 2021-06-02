import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCx_dAq88oGMjFFjtExEtarpCpun-01MOQ",
    authDomain: "auth-298d1.firebaseapp.com",
    projectId: "auth-298d1",
    storageBucket: "auth-298d1.appspot.com",
    messagingSenderId: "748320647388",
    appId: "1:748320647388:web:54783089109b77f9096c19",
    measurementId: "G-J04VY8V55M"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;