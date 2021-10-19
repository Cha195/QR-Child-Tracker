// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyD65oY4y8zVOOZSc-YZcuP3C4apXR-PQ_k',
  authDomain: 'child-traqr.firebaseapp.com',
  projectId: 'child-traqr',
  storageBucket: 'child-traqr.appspot.com',
  messagingSenderId: '591113354488',
  appId: '1:591113354488:web:fac72b38721e562286cf0d',
  measurementId: 'G-V359Y9VJ9V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app) //eslint-disable-line
