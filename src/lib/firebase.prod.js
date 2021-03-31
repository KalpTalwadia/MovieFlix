import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
// import {seedDatabase} from '../seed'

const configuration = {
    apiKey: "AIzaSyCTC0sMfbeWufGYKIY2kpE0ztGapvhHVOY",
    authDomain: "movieflix-9409d.firebaseapp.com",
    projectId: "movieflix-9409d",
    storageBucket: "movieflix-9409d.appspot.com",
    messagingSenderId: "941264721216",
    appId: "1:941264721216:web:99f19c179d1b85dd7b96a5"
};

const firebase =Firebase.initializeApp(configuration);

// seedDatabase(firebase);
export { firebase };