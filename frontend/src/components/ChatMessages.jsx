const ChatMessages = ({ messages, chatBoxRef }) => {
  return (
    <div ref={chatBoxRef} className="bg-white shadow-md p-4 rounded-lg h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`p-2 rounded-lg shadow-lg max-w-[70%] ${msg.type === "user" ? "bg-blue-100 text-right" : "bg-gray-50 text-left"}`}>
            <div className="text-xs text-gray-500">{msg.type === "user" ? "You" : "Server"}</div>
            <div className="text-sm break-words">{msg.text}</div>
            <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;