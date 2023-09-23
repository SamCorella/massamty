import React, { useState } from "react";
import { auth } from "./App";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handeLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handeLogin}>
        <h2>Email</h2>
        <input type="email" id="email" onChange={handleEmailChange} />

        <h2>Password</h2>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
