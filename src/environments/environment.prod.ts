// // export const environment = {
// //   production: true
// // };
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: 'AIzaSyAC5qhbwgsrbTQPxgjKpj3FJ-roEJ5FNOY',
//     authDomain: '<your-project-authdomain>',
//     databaseURL: 'https://weknow-93749-default-rtdb.firebaseio.com',
//     projectId: 'weknow-93749',
//     storageBucket: '<your-storage-bucket>',
//     messagingSenderId: '<your-messaging-sender-id>',
//     appId: '<your-app-id>',
//     measurementId: '<your-measurement-id>'
//   }
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: true,
  firebase : {
  apiKey: "AIzaSyAC5qhbwgsrbTQPxgjKpj3FJ-roEJ5FNOY",
  authDomain: "weknow-93749.firebaseapp.com",
  databaseURL: "https://weknow-93749-default-rtdb.firebaseio.com",
  projectId: "weknow-93749",
  storageBucket: "weknow-93749.appspot.com",
  messagingSenderId: "475027757734",
  appId: "1:475027757734:web:7fa1e0a004b054162b3267",
  measurementId: "G-4EMM2X3S6R"
}};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);