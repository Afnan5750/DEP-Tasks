import React from "react";
import "./MessageList.css";

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.username === currentUser ? "right" : "left"
          }`}
        >
          <strong>{msg.username}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
