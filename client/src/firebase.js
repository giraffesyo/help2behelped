import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyCxKfTJMhD4_TojRldtrPEBvCtfDBRvQqA',
  authDomain: 'help-2-get-help.firebaseapp.com',
  databaseURL: 'https://help-2-get-help.firebaseio.com',
  projectId: 'help-2-get-help',
  storageBucket: 'help-2-get-help.appspot.com',
  messagingSenderId: '754026503949'
}
firebase.initializeApp(firebaseConfig)

export default firebase
