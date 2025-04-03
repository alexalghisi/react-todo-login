import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5D9dPO7sR7fHK8FCIwl0S2HsS9CFHQPE",
    authDomain: "todo-app-c3cd8.firebaseapp.com",
    projectId: "todo-app-c3cd8",
    storageBucket: "todo-app-c3cd8.firebasestorage.app",
    messagingSenderId: "365269026998",
    appId: "1:365269026998:web:5351dd4b80c7d6b4f3fe17"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };