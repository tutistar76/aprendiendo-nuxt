import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA0zeI8or7D-ijVcQ1zLtpXl047bi4Nbzo",
    authDomain: "nuxt-55bfb.firebaseapp.com",
    databaseURL: "https://nuxt-55bfb.firebaseio.com",
    projectId: "nuxt-55bfb",
    storageBucket: "nuxt-55bfb.appspot.com",
    messagingSenderId: "162215207564"
  };
  firebase.initializeApp(config);

  export default firebase