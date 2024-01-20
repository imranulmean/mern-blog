// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };

/////////////////////////////////////
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4e89d.firebaseapp.com",
  projectId: "mern-estate-4e89d",
  //storageBucket: "mern-estate-4e89d.appspot.com",
  // storageBucket: 'mern-estate.appspot.com',
  storageBucket: 'mern-blog-b327f.appspot.com',
  messagingSenderId: "11007302888",
  appId: "1:11007302888:web:e3d232a01659511033bd5d"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
