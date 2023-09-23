import "./App.css";
import Login from "./Login";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLzpKdnUBM--N0dQ8rI7IUPIQdfe672s",
  authDomain: "massamty-d97f8.firebaseapp.com",
  projectId: "massamty-d97f8",
  storageBucket: "massamty-d97f8.appspot.com",
  messagingSenderId: "301372907492",
  appId: "1:301372907492:web:b2cea8008f9c98d4f4f1f1",
  measurementId: "G-1SN4D8HV0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Login />
      <h3>Create an account</h3>
      <button>Create Account</button>
    </div>
  );
}

export default App;
export { app, auth };
