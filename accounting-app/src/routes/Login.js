import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";

// Test User:
// Email: testuser@gmail.com
// Password: testing123#

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handeLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in successfully!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handeLogin}>
        <h2>Email</h2>
        <input
          type="email"
          id="email"
          autoComplete="off"
          onChange={handleEmailChange}
          value={email}
          required
        />

        <h2>Password</h2>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <button type="submit">Login</button>
      </form>
      <h3>Create an account</h3>
      <Link to="/CreateAccount">Create Account</Link>
    </div>
  );
}

export default Login;
