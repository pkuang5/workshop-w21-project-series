import firebase from 'firebase'

//config file from firebase console
const firebaseConfig = {
    apiKey: "AIzaSyDWLQyQXuQoMTfRRC5Fy0_agG1tazhHRt0",
    authDomain: "coders-sb-recipeapp.firebaseapp.com",
    databaseURL: "https://coders-sb-recipeapp-default-rtdb.firebaseio.com",
    projectId: "coders-sb-recipeapp",
    storageBucket: "coders-sb-recipeapp.appspot.com",
    messagingSenderId: "850523336506",
    appId: "1:850523336506:web:4af073095d97a9111b2a03",
    measurementId: "G-0J35VNPSBV"
  };


firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export {
    database as default
}