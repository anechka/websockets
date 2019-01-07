const PORT = 8080;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('buratino');

});

console.log(`Starting on port ${PORT}`);