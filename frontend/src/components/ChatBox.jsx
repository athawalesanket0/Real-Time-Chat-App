import { useState, useEffect, useRef } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [inputMessage, setInputMessage] = useState("");
  const socketRef = useRef(null);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://real-time-chat-app-backend-wghv.onrender.com");
    socketRef.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error("Failed to parse message:", event.data, error);
      }
    };
    return () => socketRef.current?.close();
  }, []);

  const sendMessage = () => {
    if (socketRef.current && inputMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      const userMessage = { text: inputMessage, timestamp, type: "user" };
      setMessages((prev) => [...prev, userMessage]);
      socketRef.current.send(JSON.stringify({ text: inputMessage }));
      setInputMessage("");
    }
  };

  const clearChatHistory = () => {
    localStorage.removeItem("chatHistory");
    setMessages([]);
  };

  return (
    <div className="space-y-4">
      <ChatMessages messages={messages} chatBoxRef={chatBoxRef} />
      <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} sendMessage={sendMessage} clearChatHistory={clearChatHistory} messages={messages} />
    </div>
  );
};

export default ChatBox;
