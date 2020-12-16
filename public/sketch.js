let midiOutput;
let button;
let socket;

function setup() {
  noCanvas();
  socket = io.connect();
  button = createButton('Click Me', width / 2, height / 2);
  button.mousePressed(() => {
    buttonPressed('C2');
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
