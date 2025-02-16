const ChatInput = ({ inputMessage, setInputMessage, sendMessage, clearChatHistory, messages }) => {
  return (
    <>
      <div className="flex flex-wrap space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 bg-white border border-gray-300 rounded-lg"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Send</button>
      </div>
      <div className="text-center mt-2">
        <button
          onClick={clearChatHistory}
          className={`bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 ${messages.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={messages.length === 0}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default ChatInput;