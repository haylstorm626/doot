var player = new Tone.Player("doot.mp3").toMaster();

var pitchShift = new Tone.PitchShift({
	pitch: 0
}).toMaster();

player.connect(pitchShift);

window.play = function(val) {
	pitchShift.pitch = val;
	Tone.context.resume();
	player.start();
}