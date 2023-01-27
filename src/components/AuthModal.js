import React from "react";

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <div className="auth-modal">
      <span onClick={handleClick} className="auth-close">
        &#10006; <br />
      </span>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
