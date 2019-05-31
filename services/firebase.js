import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA0zeI8or7D-ijVcQ1zLtpXl047bi4Nbzo",
    authDomain: "nuxt-55bfb.firebaseapp.com",
    databaseURL: "https://nuxt-55bfb.firebaseio.com",
    projectId: "nuxt-55bfb",
    storageBucket: "nuxt-55bfb.appspot.com",
    messagingSenderId: "162215207564"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  
  const db = firebase.firestore()
  const storage = firebase.storage().ref()
  const auth = firebase.auth()
  
  export default firebase

export {
  db,
  storage,
  auth
}