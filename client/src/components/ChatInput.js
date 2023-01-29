import React, { useState } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);
  return (
    <div className="chat-input">
      <textarea
        rows={5}
        placeholder="write here..."
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default ChatInput;
