import React, { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [activeUser, setActiveUser] = useState("Afnan");

  const sendMessage = (messageData) => {
    setMessages([...messages, messageData]);
  };

  const switchUser = () => {
    setActiveUser(activeUser === "Afnan" ? "Ali" : "Afnan");
  };

  return (
    <div className="app">
      <button className="switch-chat-btn" onClick={switchUser}>
        Switch to {activeUser === "Afnan" ? "Ali" : "Afnan"}
      </button>
      <div className="chat-container">
        <div className="chat">
          <h2>{activeUser === "Afnan" ? "Ali" : "Afnan"}</h2>
          <MessageList messages={messages} currentUser={activeUser} />
          <MessageInput sendMessage={sendMessage} currentUser={activeUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
