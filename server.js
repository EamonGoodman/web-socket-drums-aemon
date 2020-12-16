const express = require('express');
const app = express();
const http = require('http').createServer(app);

const options = {
  /* ... */
};
const io = require('socket.io')(http, options);

app.use('/', express.static('public'));
app.use('/play', express.static('play'));

const listener = http.listen(process.env.PORT || 3000, process.env.IP, () =>
  console.log('listening on *:3000')
);

io.on('connection', socket => {
  socket.on('fromUsers', data => {
    socket.broadcast.emit('toSequencer', data);
  });
});
