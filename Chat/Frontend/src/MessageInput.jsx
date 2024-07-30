import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ sendMessage, currentUser }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ username: currentUser, message });
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
