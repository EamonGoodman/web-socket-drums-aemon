let midiOutput;
let button;
let socket;

function setup() {
  noCanvas();
  socket = io.connect();
  socket.on('toSequencer', triggerDrum);
}

function triggerDrum(note) {
  console.log(note);
  if (midiOutput) {
    // Play note "C2" on channel 10 for half a second and with 0.5 velocity
    // (a noteOff message will be sent in half a second)
    midiOutput.playNote(note, 10, { duration: 100, velocity: 0.5 });
  } else {
    console.log(
      'Looks like there is no MIDI output device. Check if your Arduino is connected.'
    );
  }
}

WebMidi.enable(function (err) {
  if (err) {
    console.log('WebMidi could not be enabled.', err);
  }

  // Print available MIDI outputs
  for (let i = 0; i < WebMidi.outputs.length; i++) {
    console.log(WebMidi.outputs[i].name);
  }

  // From the list on the console, pick an output name:
  midiOutput = WebMidi.getOutputByName("IAC Driver Web MIDI");
  // midiOutput = WebMidi.getOutputByName('Arduino MKRZero');
});
