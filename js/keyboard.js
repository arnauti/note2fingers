
if (navigator.requestMIDIAccess) {
    console.log('WebMIDI is supported in this browser.');
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
    console.log('WebMIDI is not supported in this browser.');
    document.querySelector('.note-info').textContent = 'Error: This browser does not support WebMIDI.';
}

function onMIDISuccess(midiAccess) {
    // shuffleArray(level1Notes);
    // drawNote(level1Notes[noteIndex]);
    
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;

    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}

function getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = message.data[2];

    switch (command) {
        case 144: // noteOn
            document.querySelector('.note-info').textContent = 'Command: ' + command +
                ' , Note: ' + note + ' , Velocity: ' + velocity;
            // noteOnListener(note);
            console.log("Nota tocada: ",note);
            MidiManager.drawNote(note);
            break;
        case 128: // note off
            MidiManager.eraseNote();
        break;
    }
}

function onMIDIFailure() {
    document.querySelector('.note-info').textContent = 'Error: Could not access MIDI devices. Connect a device and refresh to try again.';
}

var MidiManager = {
    notes: [],
    current_note: 60,
    noteFirstPos: -116,
    beginGame: function(){
        
    },
    note2Position: function(note){
        // 60 es top 100px
        from_c4 = 60-this.notes[note].pos;
        return 96 + (from_c4*15);
    },
    drawNote: function(note){
        document.querySelector("#nota_play").style.display= "block";
        console.log("drawNote:",note, "pos:", this.notes[note].pos,  this.note2Position(note).toString() + "px");
        document.querySelector("#nota_play").style.top = this.note2Position(note).toString() + "px";
        document.querySelector("#nota_play").querySelector(".name").innerHTML = this.notes[note].name;
    },
    eraseNote: function(note){
        document.querySelector("#nota_play").style.display= "none";
    },
}



MidiManager.notes[89] = {note: 89, pos: 77, name: "F6 FA"};
MidiManager.notes[88] = {note: 88, pos: 76, name: "E6 MI"};
MidiManager.notes[87] = {note: 87, pos: 75, name: "D#6/Eb6"};
MidiManager.notes[86] = {note: 86, pos: 75, name: "D6 RE"};
MidiManager.notes[85] = {note: 85, pos: 74, name: "C#6/Db6"};
MidiManager.notes[84] = {note: 84, pos: 74, name: "C6 DO"};
MidiManager.notes[83] = {note: 83, pos: 73, name: "B5 SI"};
MidiManager.notes[82] = {note: 82, pos: 72, name: "A#5/Bb5"};
MidiManager.notes[81] = {note: 81, pos: 72, name: "A5 LA"};
MidiManager.notes[80] = {note: 80, pos: 71, name: "G#5/Ab5"};
MidiManager.notes[79] = {note: 79, pos: 71, name: "G5 SOL"};
MidiManager.notes[78] = {note: 78, pos: 70, name: "F#5/Gb5"};
MidiManager.notes[77] = {note: 77, pos: 70, name: "F5 FA"};
MidiManager.notes[76] = {note: 76, pos: 69, name: "E5 MI"};
MidiManager.notes[75] = {note: 75, pos: 68, name: "D#5/Eb5"};
MidiManager.notes[74] = {note: 74, pos: 68, name: "D5 RE"};
MidiManager.notes[73] = {note: 73, pos: 67, name: "C#5/Db5"};
MidiManager.notes[72] = {note: 72, pos: 67, name: "C5 DO"};
MidiManager.notes[71] = {note: 71, pos: 66, name: "B4 SI"};
MidiManager.notes[70] = {note: 70, pos: 65, name: "A#4/Bb4"};
MidiManager.notes[69] = {note: 69, pos: 65, name: "A4 LA"};
MidiManager.notes[68] = {note: 68, pos: 64, name: "G#4/Ab4"};
MidiManager.notes[67] = {note: 67, pos: 64, name: "G4 SOL"};
MidiManager.notes[66] = {note: 66, pos: 63, name: "F#4/Gb4"};
MidiManager.notes[65] = {note: 65, pos: 63, name: "F4 FA"};
MidiManager.notes[64] = {note: 64, pos: 62, name: "E4 MI"};
MidiManager.notes[63] = {note: 63, pos: 61, name: "D#4/Eb4"};
MidiManager.notes[62] = {note: 62, pos: 61, name: "D4 RE"};
MidiManager.notes[61] = {note: 61, pos: 60, name: "C#4/Db4"};
MidiManager.notes[60] = {note: 60, pos: 60, name: "C4 DO"};
MidiManager.notes[59] = {note: 59, pos: 59, name: "B3 SI"};
MidiManager.notes[58] = {note: 58, pos: 58, name: "A#3/Bb3"};
MidiManager.notes[57] = {note: 57, pos: 58, name: "A3 LA"};
MidiManager.notes[56] = {note: 56, pos: 57, name: "G#3/Ab3"};
MidiManager.notes[55] = {note: 55, pos: 57, name: "G3 SOL"};
MidiManager.notes[54] = {note: 54, pos: 56, name: "F#3/Gb3"};
MidiManager.notes[53] = {note: 53, pos: 56, name: "F3 FA"};
MidiManager.notes[52] = {note: 52, pos: 55, name: "E3 MI"};
MidiManager.notes[51] = {note: 51, pos: 54, name: "D#3/Eb3"};
MidiManager.notes[50] = {note: 50, pos: 54, name: "D3 RE"};
MidiManager.notes[49] = {note: 49, pos: 53, name: "C#3/Db3"};
MidiManager.notes[48] = {note: 48, pos: 53, name: "C3 DO"};
MidiManager.notes[47] = {note: 47, pos: 52, name: "B2"};
MidiManager.notes[46] = {note: 46, pos: 51, name: "A#2/Bb2"};
MidiManager.notes[45] = {note: 45, pos: 51, name: "A2"};
MidiManager.notes[44] = {note: 44, pos: 50, name: "G#2/Ab2"};
MidiManager.notes[43] = {note: 43, pos: 50, name: "G2"};
MidiManager.notes[42] = {note: 42, pos: 49, name: "F#2/Gb2"};
MidiManager.notes[41] = {note: 41, pos: 49, name: "F2"};
MidiManager.notes[40] = {note: 40, pos: 48, name: "E2"};
MidiManager.notes[39] = {note: 39, pos: 47, name: "D#2/Eb2"};
MidiManager.notes[38] = {note: 38, pos: 47, name: "D2"};
MidiManager.notes[37] = {note: 37, pos: 46, name: "C#2/Db2"};
MidiManager.notes[36] = {note: 36, pos: 46, name: "C2"};
MidiManager.notes[35] = {note: 35, pos: 45, name: "B1"};
MidiManager.notes[34] = {note: 34, pos: 44, name: "A#1/Bb1"};
MidiManager.notes[33] = {note: 33, pos: 44, name: "A1"};