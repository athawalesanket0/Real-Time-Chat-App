const WebSocket = require('ws');

const port = process.env.PORT || 8080;
const server = new WebSocket.Server({ port });

server.on('connection', (socket) => {
  console.log('A new client connected!');

  socket.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    const timestamp = new Date().toLocaleTimeString();
    const serverMessage = { 
      text: `${parsedMessage.text}`,
      timestamp: timestamp
    };
  
    socket.send(JSON.stringify(serverMessage)); 
  });

  socket.on('close', () => {
    console.log('A client disconnected.');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
