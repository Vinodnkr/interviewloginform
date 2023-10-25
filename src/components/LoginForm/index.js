// LoginForm.js
import React, { useState } from "react";

import { Link } from "react-router-dom"; 
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    
       <div className="homeLink">    <Link to="/password">Forget Password?</Link></div>
      
      
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/registration">Sign Up Now</Link>
      </p>
      
    </div>
  );
};

export default LoginForm;
