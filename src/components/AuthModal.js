import React, { useState } from "react";

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };

  const isSignUp = true;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-modal">
      <span onClick={handleClick} className="auth-close">
        &#10006; <br />
      </span>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking "Log in", you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password-check"
          id="password-check"
          name="password-check"
          placeholder="Confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input type="submit" className="secondary-button" />
        <p>{error && error}</p>
      </form>
    </div>
  );
};

export default AuthModal;
