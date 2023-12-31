import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./index.css";
import SignIn from "./routes/SignIn";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import EventLog from "./routes/EventLog";
import Ledger from "./routes/Ledger";
import JournalEntry from "./routes/JournalEntry";
import ForgotPassword from "./routes/ForgotPassword";
import ResetPassword from "./routes/ResetPassword";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/EventLog" element={<EventLog />} />
          <Route path="/Ledger/:accountId" element={<Ledger />} />
          <Route path="/JournalEntry" element={<JournalEntry />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
);

export { auth, db };
