// filepath: src/contexts/authContext/auth.js
import { auth } from "../../firebase/firebase.ts";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

// Call this function to sign in anonymously
export function signInAnon() {
  return signInAnonymously(auth)
    .then((userCredential) => {
      // Signed in..
      console.log("Signed in anonymously:", userCredential.user);
    })
    .catch((error) => {
      console.error("Anonymous sign-in error:", error);
    });
}

// Listen for auth state changes (optional)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("No user signed in.");
  }
});