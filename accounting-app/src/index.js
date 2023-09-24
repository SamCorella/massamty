import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLzpKdnUBM--N0dQ8rI7IUPIQdfe672s",
  authDomain: "massamty-d97f8.firebaseapp.com",
  projectId: "massamty-d97f8",
  storageBucket: "massamty-d97f8.appspot.com",
  messagingSenderId: "301372907492",
  appId: "1:301372907492:web:b2cea8008f9c98d4f4f1f1",
  measurementId: "G-1SN4D8HV0R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export { auth };
