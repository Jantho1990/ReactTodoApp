import firebase from 'firebase'

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiNJz07svIWoOprErxr8stXckQVaTm9q4",
    authDomain: "reacttodoapp-2ddec.firebaseapp.com",
    databaseURL: "https://reacttodoapp-2ddec.firebaseio.com",
    projectId: "reacttodoapp-2ddec",
    storageBucket: "reacttodoapp-2ddec.appspot.com",
    messagingSenderId: "146145887591"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref()

export default firebase