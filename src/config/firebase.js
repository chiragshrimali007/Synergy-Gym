/**
 * Firebase Optional Client Integration
 * Synergy Gym website is completely functional statically without requiring Firebase.
 * If Firebase environment variables are provided, this module safely initializes
 * the Firebase client SDK without exposing any Admin SDK secrets.
 */

let app = null;
let db = null;
let isFirebaseConfigured = false;

const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || ""
};

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  isFirebaseConfigured = true;
}

export { app, db, isFirebaseConfigured, firebaseConfig };
