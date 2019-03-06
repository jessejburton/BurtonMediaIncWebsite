import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBv2Ny-ATtEO65v8cQWqrAD0BB7A9O1lIQ',
  authDomain: 'workshop-registration-7917f.firebaseapp.com',
  databaseURL: 'https://workshop-registration-7917f.firebaseio.com',
  projectId: 'workshop-registration-7917f',
  storageBucket: '',
  messagingSenderId: '1052910602805'
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;
