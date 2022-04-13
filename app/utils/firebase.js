import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBJUDQX25RYAJgNhyh4YhteWfGeY7o4M40",
  authDomain: "restaurant-85ecb.firebaseapp.com",
  projectId: "restaurant-85ecb",
  storageBucket: "restaurant-85ecb.appspot.com",
  messagingSenderId: "714294142519",
  appId: "1:714294142519:web:7d3423ac159385e78bc1b2"
}
  export const firebaseApp = firebase.initializeApp(firebaseConfig)