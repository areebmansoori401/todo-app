
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-1bMJDz-cBVVIr_qS5ChyBpzBSvxjdtM",
  authDomain: "register-form-e5854.firebaseapp.com",
  projectId: "register-form-e5854",
  storageBucket: "register-form-e5854.appspot.com",
  messagingSenderId: "1053951345931",
  appId: "1:1053951345931:web:292ad16d216bfa404fce0e",
  measurementId: "G-P6V6GTL3H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);