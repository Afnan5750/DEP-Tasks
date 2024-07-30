import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./Chat.css";

const Chat = ({ messages, sendMessage }) => {
  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
