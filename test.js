import openSocket from 'socket.io-client/dist/socket.io';
const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
 socketResp  = socket.on('timer', timestamp => cb(null, timestamp));
 resp = socket.emit('subscribeToTimer', 1000); 
 console.log(socketResp)
 console.log(resp)
}


export { subscribeToTimer };