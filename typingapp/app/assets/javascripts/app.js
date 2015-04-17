 $(document).ready(function() {

	function Game(level) {
		self = this;
		self.init = init;

		var counter = 0;
		var seconds = 0;

		// grabs page elements
		var ex = document.getElementById("exerciseBox");
		var inn = document.getElementById("inputBox");
		var hid = document.getElementById("hiddenBox");
		var ip = document.getElementById("textBox");



		ip.value = "hi";

		// sets input boxes
		inn.innerHTML = "";
		hid.innerHTML = "|";
		hid.style.paddingLeft = "0.55em";
		self.level = ex.innerHTML;

		// starts timer
		function timer () {
			seconds += 1;
			clockRun = setTimeout(timer, 1000);
		};

		// displays the letter typed in the input box
		function displayLetter(letter) {
			if (counter === 0) {
				timer();
			}
			var currentInput = inn.innerHTML;
			if (self.level[counter] == letter) {
				currentInput += letter;
			}
			else {
				currentInput += "<span class='block'>-</span>";
			}
			inn.innerHTML = currentInput;
			moveCursor();
			counter++;
		}

		// calculates grossWPM
		function calculateGrossWpm(seconds) {
			var totalChars = self.level.length;
			var minutes = seconds / 60;
			var grossWpm = (totalChars / 5) / minutes;
			return grossWpm;
		}	


		// calculates netWPM
		function calculateNetWpm(errors, seconds) {
			var totalChars = self.level.length;
			var minutes = seconds / 60;
			// var grossWpm = (totalChars / 5) * (seconds/60)
			var netWpm = ((totalChars/5) - errors) / minutes;
			// var netWpm = grossWpm - (errors / minutes);
			return netWpm;
		}		

		// calculates how many errors
		function calculateErrors() {
			var errors = 0;
			var realChars = $(ex).text();
			var inputChars = $(inn).text();
			for (var i = 0; i < self.level.length; i++) {
				console.log(realChars[i] + " vs " + inputChars[i])
				if (realChars[i] != inputChars[i]) {
					if (realChars.charCodeAt(i) == 32 && inputChars.charCodeAt(i) == 160) {
						console.log("fixed!");
					}
					else {
						errors++;
					}
				}
			}
			var grossWpm = calculateGrossWpm(seconds)
			var netWpm = calculateNetWpm(errors, seconds);
			alert(grossWpm + " WPM adjusted to " + netWpm + " WPM");

		}



		// moves cursor
		function moveCursor() {
			var padding = hid.style.paddingLeft;
			padding = parseFloat(padding);
			console.log(padding);
			padding += 0.6;
			padding += "em";
			hid.style.paddingLeft = padding;
		}

		// checks keycode and puts appropriate letter
		function inputLetter(e) {
			e.preventDefault();
			if (counter < self.level.length) {
				
				var kCode = e.keyCode;
				switch (kCode) {
					case 65:
						displayLetter("a");
						break;
					case 66:
						displayLetter("b");
						break;
					case 67:
						displayLetter("c");
						break;
					case 68:
						displayLetter("d");
						break;
					case 69:
						displayLetter("e");
						break;
					case 70:
						displayLetter("f");
						break;
					case 71:
						displayLetter("g");
						break;
					case 72:
						displayLetter("h");
						break;
					case 73:
						displayLetter("i");
						break;
					case 74:
						displayLetter("j");
						break;
					case 75:
						displayLetter("k");
						break;
					case 76:
						displayLetter("l");
						break;
					case 77:
						displayLetter("m");
						break;
					case 78:
						displayLetter("n");
						break;
					case 79:
						displayLetter("o");
						break;
					case 80:
						displayLetter("p");
						break;
					case 81:
						displayLetter("q");
						break;
					case 82:
						displayLetter("r");
						break;
					case 83:
						displayLetter("s");
						break;
					case 84:
						displayLetter("t");
						break;
					case 85:
						displayLetter("u");
						break;
					case 86:
						displayLetter("v");
						break;
					case 87:
						displayLetter("w");
						break;
					case 88:
						displayLetter("x");
						break;
					case 89:
						displayLetter("y");
						break;
					case 90:
						displayLetter("z");
						break;
					case 32:
						var currentInput = inn.innerHTML;
						if (self.level[counter] == " ") {
							currentInput += "&nbsp;";
						}
						else {
							currentInput += "<span class='block'>-</span>";
						}
						inn.innerHTML = currentInput;
						moveCursor();
						counter++;
						break;
					default:
						console.log("other");
				}

				if (counter == self.level.length) {
					clearTimeout(clockRun);
					calculateErrors();
				}
			}
		}

		// initializes game
		function init() {
			window.addEventListener("keydown", inputLetter);
		}

	}

	game = new Game();
	game.init();
});