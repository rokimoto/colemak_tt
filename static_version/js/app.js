(function() {

	function Game(level) {
		self = this;
		self.level = level;
		self.init = init;

		var counter = 0;

		// remove later
		self.level = "sets tens ten tnt sestet tenet seen nene testee";
		ex = document.getElementById("exerciseBox");
		inn = document.getElementById("inputBox");
		hid = document.getElementById("hiddenBox");
		ex.innerHTML = self.level;
		inn.innerHTML = "";
		hid.innerHTML = "|";
		hid.style.paddingLeft = "0.35em";

		function displayLetter(letter) {
			var currentInput = inn.innerHTML;
			if (self.level[counter] == letter) {
				currentInput += letter;
			}
			else {
				currentInput += "<span class='block'>-</span>";
			}
			inn.innerHTML = currentInput;
		}

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
			alert(errors + " MISTAKES!");
		}

		function moveCursor() {
			var padding = hid.style.paddingLeft;
			padding = parseFloat(padding);
			console.log(padding);
			padding += 0.6;
			padding += "em";
console.log(padding);
			hid.style.paddingLeft = padding;
		}

		function inputLetter(e) {
			if (counter < self.level.length) {
				e.preventDefault();
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
						break;
					default:
						console.log("other");
				}
				moveCursor();
				counter++;
				if (counter == self.level.length) {
					calculateErrors();
				}
			}
		}

		function init() {
			window.addEventListener("keydown", inputLetter);
		}

	}

	game = new Game;
	game.init();

})();