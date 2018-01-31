import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC5Jfye8r7Dc3ihTjOZ61RhBNCTFdKLH6M",
    authDomain: "fir-authentication-8af4c.firebaseapp.com",
    databaseURL: "https://fir-authentication-8af4c.firebaseio.com",
    projectId: "fir-authentication-8af4c",
    storageBucket: "fir-authentication-8af4c.appspot.com",
    messagingSenderId: "632711649159"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const auth = firebase.auth();
  
  export {
    auth,
  };
