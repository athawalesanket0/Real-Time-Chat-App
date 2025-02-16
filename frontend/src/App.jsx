import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="relative sm:max-w-xl sm:mx-auto">
      <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Simple Chat App</h1>
        <ChatBox />
      </div>
    </div>
  );
}

export default App;