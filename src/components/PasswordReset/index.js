// PasswordReset.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./index.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement the logic for sending a password reset link to the email
    alert("Password reset link sent to " + email);
  };

  return (
    <div className="password-reset">
      <h2>Reset Password</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      <div className="homeLink">    <Link to="/">Home</Link></div>
    </div>
  );
};

export default PasswordReset;
