const PORT = 8080;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(wsConnection) {

    wsConnection.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    wsConnection.send('buratino');

});

console.log(`Starting on port ${PORT}`);