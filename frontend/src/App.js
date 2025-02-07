import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to the backend server

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message); // Send the message to the server
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Private Chat App</h1>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;