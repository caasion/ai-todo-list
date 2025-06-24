// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUn8TtH6WaAh4ZxSIP_VuCIGMqlzSDn7c",
  authDomain: "smart-todo-3d972.firebaseapp.com",
  projectId: "smart-todo-3d972",
  storageBucket: "smart-todo-3d972.firebasestorage.app",
  messagingSenderId: "150396216496",
  appId: "1:150396216496:web:ee75bd16fad852f6460775",
  measurementId: "G-LL1FP94KMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

export { app, auth, ai, model };
