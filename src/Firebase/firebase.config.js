// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHl1H49fN4LbclwUx2GbRn39Jmt6kNIcY",
    authDomain: "task-management-5804d.firebaseapp.com",
    projectId: "task-management-5804d",
    storageBucket: "task-management-5804d.appspot.com",
    messagingSenderId: "98666450390",
    appId: "1:98666450390:web:87b5316db2dd6797fee877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth