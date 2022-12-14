const http = require('http');

const app = require('./app');

app.set('port', 4000);

const server = http.createServer(app);

server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port 4000';
    console.log('Listening on ' + bind);
});

server.listen(4000);
