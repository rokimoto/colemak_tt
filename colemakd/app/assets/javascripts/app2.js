$(document).ready(function() {

var newLevelPage = document.getElementById('newLevelPage');

	if (newLevelPage) {


		var formGroup = document.getElementById('formGroup');
		var newCatText = document.getElementById('newCatText');
		var selectBox = document.getElementById('level_category_id');
		var form = document.getElementById('new_level');
		var selectBoxName = document.getElementById('level_category_attributes_name');
		var chooseOne = document.createElement("option");
		chooseOne.value = "new";
		chooseOne.innerHTML = "Add a new category...";
		selectBox.appendChild(chooseOne);

		var newNameInput = document.createElement("input");
		newNameInput.type = "text";
		newNameInput.name = "level[category_attributes][name]";
		newNameInput.id = "level_category_attributes_name";

		var selectBoxCounter = 0;

		newCatText.style.display = "none";
		selectBoxName.style.display = "none";

		selectBox.onchange=function(){
			if (this.value != "new") {
				newCatText.style.display = "none";
				formGroup.removeChild(selectBoxName);
				selectBoxCounter++;
			}
			else if (this.value == "new" && selectBoxCounter > 0) {
				formGroup.appendChild(newNameInput);
				newCatText.style.display = "block";
			}
			else {
				newCatText.style.display = "block";
				selectBoxName.style.display = "block";
			}
		};

	}

// grabs page elements
		var ex = document.getElementById("exerciseBox");
		var inn = document.getElementById("inputBox");
		var hid = document.getElementById("hiddenBox");

		var ex2 = document.getElementById("exerciseBox2");
		var inn2 = document.getElementById("inputBox2");
		var hid2 = document.getElementById("hiddenBox2");

	function Game() {
		self = this;
		self.init = init;

		var counter = 0;
		var seconds = 0;

		var modalWpm = document.getElementById("modalWpm");

		var wpmBox = document.getElementById("WpmBox");
		wpmBox.readOnly = true;

		inn.innerHTML = "";
		inn2.innerHTML = "";
		hid.innerHTML = "|";
		hid.style.paddingLeft = "0.6em";
		hid2.style.paddingLeft = "0.6em";						

		// starts timer
		function timer () {
			seconds += 1;
			clockRun = setTimeout(timer, 1000);
		}

		// displays the letter typed in the input box
		function displayLetter(letter, whichExBox, whichInnBox, whichHidBox) {
			if (counter === 0 && whichExBox == ex) {
				timer();
			}
			var currentInput = whichInnBox.innerHTML;
			var exBoxText = whichExBox.innerHTML

			if (exBoxText[counter] == letter) {
				currentInput += letter;
			}
			else {
				currentInput += "<span class='block'>-</span>";
			}
			whichInnBox.innerHTML = currentInput;
			moveCursor(whichHidBox);
			counter++;
		}

		// calculates grossWPM
		function calculateGrossWpm(seconds) {
			var totalChars = ex.innerHTML.length + ex2.innerHTML.length;
			var minutes = seconds / 60;
			var grossWpm = (totalChars / 5) / minutes;
			if (grossWpm < 0) {
				return 0;
			}
			grossWpm = Math.ceil(grossWpm);
			return grossWpm;
		}	

		// calculates netWPM
		function calculateNetWpm(errors, seconds) {
			var totalChars = ex.innerHTML.length + ex2.innerHTML.length;
			var minutes = seconds / 60;
			var netWpm = ((totalChars/5) - errors) / minutes;
			if (netWpm < 0) {
				return 0;
			}
			netWpm = Math.ceil(netWpm);
			return netWpm;
		}	

		// calculates how many errors
		function calculateErrors() {
			var errors = 0;
			var realChars = $(ex).text();
			var inputChars = $(inn).text();
			realChars += $(ex2).text();
			inputChars += $(inn2).text();				
			for (var i = 0; i < realChars.length; i++) {
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
			wpmBox.value = netWpm;
			modalWpm.innerHTML = grossWpm + " WPM with " + errors + " errors adjusted to " + netWpm + " WPM";
			$('#myModal').foundation('reveal', 'open');
		}

		function moveCursor(whichHidBox) {
			var padding = whichHidBox.style.paddingLeft;
			padding = parseFloat(padding);
			padding += 0.6;
			padding += "em";
			whichHidBox.style.paddingLeft = padding;
		}


		// checks keycode and puts appropriate letter
		function inputLetter(keyCode, whichInnBox, whichExBox, whichHidBox) {

			if (counter < whichExBox.innerHTML.length) {
				
				var kCode = keyCode;

				switch (kCode) {
					case 65:
						displayLetter("a", whichExBox, whichInnBox, whichHidBox);
						break;
					case 66:
						displayLetter("b", whichExBox, whichInnBox, whichHidBox);
						break;
					case 67:
						displayLetter("c", whichExBox, whichInnBox, whichHidBox);
						break;
					case 68:
						displayLetter("d", whichExBox, whichInnBox, whichHidBox);
						break;
					case 69:
						displayLetter("e", whichExBox, whichInnBox, whichHidBox);
						break;
					case 70:
						displayLetter("f", whichExBox, whichInnBox, whichHidBox);
						break;
					case 71:
						displayLetter("g", whichExBox, whichInnBox, whichHidBox);
						break;
					case 72:
						displayLetter("h", whichExBox, whichInnBox, whichHidBox);
						break;
					case 73:
						displayLetter("i", whichExBox, whichInnBox, whichHidBox);
						break;
					case 74:
						displayLetter("j", whichExBox, whichInnBox, whichHidBox);
						break;
					case 75:
						displayLetter("k", whichExBox, whichInnBox, whichHidBox);
						break;
					case 76:
						displayLetter("l", whichExBox, whichInnBox, whichHidBox);
						break;
					case 77:
						displayLetter("m", whichExBox, whichInnBox, whichHidBox);
						break;
					case 78:
						displayLetter("n", whichExBox, whichInnBox, whichHidBox);
						break;
					case 79:
						displayLetter("o", whichExBox, whichInnBox, whichHidBox);
						break;
					case 80:
						displayLetter("p", whichExBox, whichInnBox, whichHidBox);
						break;
					case 81:
						displayLetter("q", whichExBox, whichInnBox, whichHidBox);
						break;
					case 82:
						displayLetter("r", whichExBox, whichInnBox, whichHidBox);
						break;
					case 83:
						displayLetter("s", whichExBox, whichInnBox, whichHidBox);
						break;
					case 84:
						displayLetter("t", whichExBox, whichInnBox, whichHidBox);
						break;
					case 85:
						displayLetter("u", whichExBox, whichInnBox, whichHidBox);
						break;
					case 86:
						displayLetter("v", whichExBox, whichInnBox, whichHidBox);
						break;
					case 87:
						displayLetter("w", whichExBox, whichInnBox, whichHidBox);
						break;
					case 88:
						displayLetter("x", whichExBox, whichInnBox, whichHidBox);
						break;
					case 89:
						displayLetter("y", whichExBox, whichInnBox, whichHidBox);
						break;
					case 90:
						displayLetter("z", whichExBox, whichInnBox, whichHidBox);
						break;
					case 32:
						if (counter === 0 && whichExBox == ex) {
							timer();
						}
						var currentInput = whichInnBox.innerHTML;
						var exBoxText = whichExBox.innerHTML;
						if (counter == ex.innerHTML.length-1 && whichExBox == ex) {
							currentInput += "<span class='block'>-</span>";
						}
						else {
							if (exBoxText[counter] == " ") {
								currentInput += "&nbsp;";
							}
							else {
								currentInput += "<span class='block'>-</span>";
							}
						}
						whichInnBox.innerHTML = currentInput;
						moveCursor(whichHidBox);
						counter++;
						break;
					case 13:
						if (counter === 0 && whichExBox == ex) {
							timer();
						}
						var currentInput = whichInnBox.innerHTML;
						var exBoxText = whichExBox.innerHTML;
						if (counter == ex.innerHTML.length-1 && whichExBox == ex) {
							currentInput += "&nbsp;"
						}
						else {
							currentInput += "<span class='block'>-</span>";
						}
						whichInnBox.innerHTML = currentInput;

						counter++;
						break;
					default:
						console.log("other");

				}

				if (counter == ex2.innerHTML.length && whichExBox == ex2) {
					hid2.innerHTML = "";
					clearTimeout(clockRun);
					window.removeEventListener("keydown", roundTwo)
					calculateErrors();
				}

				if (counter == ex.innerHTML.length && whichExBox == ex) {
					window.removeEventListener("keydown", roundOne);
					counter = 0;
					hid.innerHTML = "";
					hid2.innerHTML = "|";
					window.addEventListener("keydown", roundTwo)
				}
			}
		}

		function roundTwo(e) {
			e.preventDefault();
			kCode = e.keyCode;		
			inputLetter(kCode, inn2, ex2, hid2);
		}

		function roundOne(e) {
			e.preventDefault();
			kCode = e.keyCode;
			inputLetter(kCode, inn, ex, hid);
		}

		// initializes game
		function init() {
			window.addEventListener("keydown",roundOne );
		}

	}

	game = new Game();
	game.init();

});