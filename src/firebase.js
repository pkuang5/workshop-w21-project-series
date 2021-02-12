import firebase from "firebase";

//config file from firebase console
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "coders-sb-recipeapp.firebaseapp.com",
  databaseURL: "https://coders-sb-recipeapp-default-rtdb.firebaseio.com",
  projectId: "coders-sb-recipeapp",
  storageBucket: "coders-sb-recipeapp.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export { database as default };
