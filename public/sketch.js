let midiOutput;
let button;
let socket;

function setup() {
  noCanvas();
  socket = io.connect();
  c2 = createButton('Tom (a)', width / 2, height / 2);
  c2.mousePressed(() => {
    buttonPressed('C3');
  });
  c2 = createButton('Snare (s)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('D3');
  });
  c2 = createButton('Tambourine (d)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('A#3');
  });
  c2 = createButton('Bell (f)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('A3');
  });
  c2 = createButton('Glass 1 (j)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('C#3');
  });
  c2 = createButton('Glass 2 (k)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('G3');
  });
  c2 = createButton('Heat Sink (l)', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('D#3');
  });
}

function buttonPressed(note) {
  socket.emit('fromUsers', note);
  console.log(note);
}

function keyPressed() {
  if (key === 'a') {
    socket.emit('fromUsers', 'C3');
  }
  if (key === 's') {
    socket.emit('fromUsers', 'D3');
  }
  if (key === 'd') {
    socket.emit('fromUsers', 'A#3');
  }
  if (key === 'f') {
    socket.emit('fromUsers', 'A3');
  }
  if (key === 'j') {
    socket.emit('fromUsers', 'C#3');
  }
  if (key === 'k') {
    socket.emit('fromUsers', 'G3');
  }
  if (key === 'l') {
    socket.emit('fromUsers', 'D#3');
  }
}
