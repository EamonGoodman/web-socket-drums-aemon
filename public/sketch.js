let midiOutput;
let button;
let socket;

function setup() {
  noCanvas();
  socket = io.connect();
  c2 = createButton('Tom', width / 2, height / 2);
  c2.mousePressed(() => {
    buttonPressed('C3');
  });
  c2 = createButton('Snare', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('D3');
  });
  c2 = createButton('Tambourine', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('A#3');
  });
  c2 = createButton('Bell', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('A3');
  });
  c2 = createButton('Glass 1', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('C#3');
  });
  c2 = createButton('Glass 2', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('G3');
  });
  c2 = createButton('Heat Sink', width / 2, height / 4);
  c2.mousePressed(() => {
    buttonPressed('D#3');
  });
}

function buttonPressed(note) {
  // if (midiOutput) {
  //   // Play note "C2" on channel 10 for half a second and with 0.5 velocity
  //   // (a noteOff message will be sent in half a second)
  //   midiOutput.playNote('C2', 10, { duration: 100, velocity: 0.5 });
  // } else {
  //   console.log(
  //     'Looks like there is no MIDI output device. Check if your Arduino is connected.'
  //   );
  // }
  socket.emit('fromUsers', note);
  console.log(note);
}
