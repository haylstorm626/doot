var player = new Tone.Player("doot.mp3");

var pitchShift = new Tone.PitchShift({
	pitch: 0
}).toMaster();

player.connect(pitchShift);

window.play = function(val) {
	pitchShift.pitch = val;
	//Tone.context.resume();
	player.start();
}

document.onkeyup = function(e) {
	switch (e.which) {
		case 90:
			play(-5);
			break;
		case 83:
			play(-4);
			break;
		case 88:
			play(-3);
			break;
		case 68:
			play(-2);
			break;
		case 67:
			play(-1);
			break;
		case 86:
			play(0);
			break;
		case 71:
			play(1);
			break;
		case 66:
			play(2);
			break;
		case 72:
			play(3);
			break;
		case 78:
			play(4);
			break;
		case 74:
			play(5);
			break;
		case 77:
			play(6);
			break;
	}
  
}