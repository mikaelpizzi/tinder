import React from "react";

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src="" />
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <i className="log-out-icon">&#8678;</i>
    </div>
  );
};

export default ChatHeader;
