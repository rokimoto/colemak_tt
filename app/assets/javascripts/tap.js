$(".levels.show").ready(function() {

		var ex = document.getElementById("exerciseBox");
		var inn = document.getElementById("inputBox");
		var hid = document.getElementById("hiddenBox");

		var ex2 = document.getElementById("exerciseBox2");
		var inn2 = document.getElementById("inputBox2");
		var hid2 = document.getElementById("hiddenBox2");

		var ex3 = document.getElementById("exerciseBox3");
		var inn3 = document.getElementById("inputBox3");
		var hid3 = document.getElementById("hiddenBox3");

		var ex4 = document.getElementById("exerciseBox4");
		var inn4 = document.getElementById("inputBox4");
		var hid4 = document.getElementById("hiddenBox4");

		var ex5 = document.getElementById("exerciseBox5");
		var inn5 = document.getElementById("inputBox5");
		var hid5 = document.getElementById("hiddenBox5");

		var ex6 = document.getElementById("exerciseBox6");

		var modalWpm = document.getElementById("modalWpm");

		var wpmBox = document.getElementById("WpmBox");
		wpmBox.readOnly = true;

    
		hid.innerHTML = "|";
		hid.style.paddingLeft = "0.8em";
		inn.innerHTML = "";

		if (inn2) {
      ex.innerHTML += " ";
			inn2.innerHTML = "";
			hid2.style.paddingLeft = "0.8em";
		}
		if (inn3) {
      ex2.innerHTML += " ";
			inn3.innerHTML = "";
			hid3.style.paddingLeft = "0.8em";
		}
		if (inn4) {
      ex3.innerHTML += " ";
			inn4.innerHTML = "";
			hid4.style.paddingLeft = "0.8em";
		}
		if (inn5) {
      ex4.innerHTML += " ";
			inn5.innerHTML = "";
			hid5.style.paddingLeft = "0.8em";
		}	

    if (ex6) {
      ex5.innerHTML += " ";
    }


		var counter = 0;
		var roundCounter = 0;
		var seconds = 0;
		var totalChars = 0;

    key('shift+a', function(){ 
        displayLetter("A"); return false; 
    });
    key('shift+b', function(){ 
        displayLetter("B"); return false; 
    });
    key('shift+c', function(){ 
        displayLetter("C"); return false; 
    });    
    key('shift+d', function(){ 
        displayLetter("D"); return false; 
    });    
    key('shift+e', function(){ 
        displayLetter("E"); return false; 
    });    
    key('shift+f', function(){ 
        displayLetter("F"); return false; 
    });    
    key('shift+g', function(){ 
        displayLetter("G"); return false; 
    });    
    key('shift+h', function(){ 
        displayLetter("H"); return false; 
    });    
    key('shift+i', function(){ 
        displayLetter("I"); return false; 
    });    
    key('shift+j', function(){ 
        displayLetter("J"); return false; 
    });    
    key('shift+k', function(){ 
        displayLetter("K"); return false; 
    });    
    key('shift+l', function(){ 
        displayLetter("L"); return false; 
    });    
    key('shift+m', function(){ 
        displayLetter("M"); return false; 
    });    
    key('shift+n', function(){ 
        displayLetter("N"); return false; 
    });    
    key('shift+o', function(){ 
        displayLetter("O"); return false; 
    });    
    key('shift+p', function(){ 
        displayLetter("P"); return false; 
    });    
    key('shift+q', function(){ 
        displayLetter("Q"); return false; 
    });    
    key('shift+r', function(){ 
        displayLetter("R"); return false; 
    });    
    key('shift+s', function(){ 
        displayLetter("S"); return false; 
    });    
    key('shift+t', function(){ 
        displayLetter("T"); return false; 
    });    
    key('shift+u', function(){ 
        displayLetter("U"); return false; 
    });    
    key('shift+v', function(){ 
        displayLetter("V"); return false; 
    });    
    key('shift+w', function(){ 
        displayLetter("W"); return false; 
    });    
    key('shift+x', function(){ 
        displayLetter("X"); return false; 
    });    
    key('shift+y', function(){ 
        displayLetter("Y"); return false; 
    });    
    key('shift+z', function(){ 
        displayLetter("Z"); return false; 
    });    
    key('a', function(){ 
        displayLetter("a"); return false; 
    });
    key('b', function(){ 
        displayLetter("b"); return false; 
    });
    key('c', function(){ 
        displayLetter("c"); return false; 
    });    
    key('d', function(){ 
        displayLetter("d"); return false; 
    });    
    key('e', function(){ 
        displayLetter("e"); return false; 
    });    
    key('f', function(){ 
        displayLetter("f"); return false; 
    });    
    key('g', function(){ 
        displayLetter("g"); return false; 
    });    
    key('h', function(){ 
        displayLetter("h"); return false; 
    });    
    key('i', function(){ 
        displayLetter("i"); return false; 
    });    
    key('j', function(){ 
        displayLetter("j"); return false; 
    });    
    key('k', function(){ 
        displayLetter("k"); return false; 
    });    
    key('l', function(){ 
        displayLetter("l"); return false; 
    });    
    key('m', function(){ 
        displayLetter("m"); return false; 
    });    
    key('n', function(){ 
        displayLetter("n"); return false; 
    });    
    key('o', function(){ 
        displayLetter("o"); return false; 
    });    
    key('p', function(){ 
        displayLetter("p"); return false; 
    });    
    key('q', function(){ 
        displayLetter("q"); return false; 
    });    
    key('r', function(){ 
        displayLetter("r"); return false; 
    });    
    key('s', function(){ 
        displayLetter("s"); return false; 
    });    
    key('t', function(){ 
        displayLetter("t"); return false; 
    });    
    key('u', function(){ 
        displayLetter("u"); return false; 
    });    
    key('v', function(){ 
        displayLetter("v"); return false; 
    });    
    key('w', function(){ 
        displayLetter("w"); return false; 
    });    
    key('x', function(){ 
        displayLetter("x"); return false; 
    });    
    key('y', function(){ 
        displayLetter("y"); return false; 
    });    
    key('z', function(){ 
        displayLetter("z"); return false; 
    }); 
     key('.', function(){ 
   	 displayLetter("."); return false; 
    });
    key('shift+/', function(){ 
   	 displayLetter("?"); return false; 
    });
      key("shift+9", function(){ 
     displayLetter("("); return false; 
    });
      key("shift+0", function(){ 
     displayLetter(")"); return false; 
    });   
    key('space', function(){ 
   	 displayLetter(" "); return false; 
    });
    key('enter', function(){ 
   	 displayLetter("enter"); return false; 
    });
    key('-', function(){ 
   	 displayLetter("-"); return false; 
    });
    key(',', function(){ 
     displayLetter(","); return false; 
    });
    key("'", function(){ 
     displayLetter("'"); return false; 
    });
    key("backspace", function(){ 
     displayLetter("`"); return false; 
    });

		function displayLetter(letter) {
			if (counter === 0 && roundCounter === 0) {
				timer();
			}
			if (roundCounter === 0) {

				if (counter === ex.innerHTML.length-1 && !ex2) {

						if (ex.innerHTML[counter] == letter) {
							inn.innerHTML += letter;
						}
						else {
							inn.innerHTML += "<span class='block'>`</span>";
						}

						hid.innerHTML = "";
						clearTimeout(clockRun);
						calculateErrors();

				}

				else if (counter === ex.innerHTML.length-1) {
					if (letter == " ") {
						inn.innerHTML += "<span class='block'>`</span>";
					}
					else if (letter == "enter") {
						inn.innerHTML += " ";
					}
					hid.innerHTML = "";
					hid2.innerHTML = "|";
					roundCounter++;
			
					counter = -1;
				}
				else{
					if (ex.innerHTML[counter] == letter) {
						inn.innerHTML += letter;
					}
					else {
						inn.innerHTML += "<span class='block'>`</span>";
					}
					moveCursor(hid);
				}
			}
			else if (roundCounter === 1) {
				if (counter === ex2.innerHTML.length-1 && !ex3) {

						if (ex2.innerHTML[counter] == letter) {
							inn2.innerHTML += letter;
						}
						else {
							inn2.innerHTML += "<span class='block'>`</span>";
						}
						hid2.innerHTML = "";
						clearTimeout(clockRun);
						calculateErrors();

				}
				else if (counter === ex2.innerHTML.length-1) {
					if (letter == " ") {
						inn2.innerHTML += "<span class='block'>`</span>";
					}
					else if (letter == "enter") {
						inn2.innerHTML += " ";
					}
					hid2.innerHTML = "";
					hid3.innerHTML = "|";
					roundCounter++;
					counter = -1;
				}
				else {
					if (ex2.innerHTML[counter] == letter) {
						inn2.innerHTML += letter;
					}
					else {
						inn2.innerHTML += "<span class='block'>`</span>";
					}
					moveCursor(hid2);
				}
			}
			else if (roundCounter === 2) {
				if (counter === ex3.innerHTML.length-1 && !ex4) {

						if (ex3.innerHTML[counter] == letter) {
							inn3.innerHTML += letter;
						}
						else {
							inn3.innerHTML += "<span class='block'>`</span>";
						}
						hid3.innerHTML = "";
						clearTimeout(clockRun);
						calculateErrors();

				}
				else if (counter === ex3.innerHTML.length-1) {		
					if (letter == " ") {
						inn3.innerHTML += "<span class='block'>`</span>";
					}
					else if (letter == "enter") {
						inn3.innerHTML += " ";
					}
					hid3.innerHTML = "";
					hid4.innerHTML = "|";
					roundCounter++;
					counter = -1;

				}
				else {
					if (ex3.innerHTML[counter] == letter) {
						inn3.innerHTML += letter;
					}
					else {
						inn3.innerHTML += "<span class='block'>`</span>";
					}
					moveCursor(hid3);
				}
			}
			else if (roundCounter === 3) {
				if (counter === ex4.innerHTML.length-1 && !ex5) {
						if (ex4.innerHTML[counter] == letter) {
							inn4.innerHTML += letter;
						}
						else {
							inn4.innerHTML += "<span class='block'>`</span>";
						}
						hid4.innerHTML = "";
						clearTimeout(clockRun);
						calculateErrors();
				}
				else if (counter == ex4.innerHTML.length-1) {		
					if (letter == " ") {
						inn4.innerHTML += "<span class='block'>`</span>";
					}
					else if (letter == "enter") {
						inn4.innerHTML += " ";
					}
					hid4.innerHTML = "";
					hid5.innerHTML = "|";
					roundCounter++;
					counter = -1;
				}

				else {
					if (ex4.innerHTML[counter] == letter) {
						inn4.innerHTML += letter;
					}
					else {
						inn4.innerHTML += "<span class='block'>`</span>";
					}
					moveCursor(hid4);
				}
			}

			else if (roundCounter === 4) {
				if (counter === ex5.innerHTML.length-1 && !ex6) {
					// if (!ex6) {
						if (ex5.innerHTML[counter] == letter) {
							inn5.innerHTML += letter;
						}
						else {
							inn5.innerHTML += "<span class='block'>`</span>";
						}
						hid5.innerHTML = "";
						clearTimeout(clockRun);
						calculateErrors();
					// }
				}
				else {
					if (ex5.innerHTML[counter] == letter) {
						inn5.innerHTML += letter;
					}
					else {
						inn5.innerHTML += "<span class='block'>`</span>";
					}
					moveCursor(hid5);
				}
			}

			counter++;
		}

		// calculates grossWPM
		function calculateGrossWpm() {
			totalChars += ex.innerHTML.length;
			if (ex2) {
				totalChars += ex2.innerHTML.length;
			}
			if (ex3) {
				totalChars += ex3.innerHTML.length;
			}
			if (ex4) {
				totalChars += ex4.innerHTML.length;
			}
			if (ex5) {
				totalChars += ex5.innerHTML.length;
			}						
			var minutes = seconds / 60;
			var grossWpm = (totalChars / 5) / minutes;
			if (grossWpm < 0) {
				return 0;
			}
			grossWpm = Math.ceil(grossWpm);
			return grossWpm;
		}	

		// calculates netWPM
		function calculateNetWpm(errors) {
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
      console.log("calculate");
      console.log(counter);
			var errors = 0;
			var realChars = $(ex).text();
			var inputChars = $(inn).text();
			if (ex2) {
				realChars += $(ex2).text();
				inputChars += $(inn2).text();
			}	
			if (ex3) {
				realChars += $(ex3).text();
				inputChars += $(inn3).text();
			}
			if (ex4) {
				realChars += $(ex4).text();
				inputChars += $(inn4).text();
			}	
			if (ex5) {
				realChars += $(ex5).text();
				inputChars += $(inn5).text();
			}											
			for (var i = 0; i < realChars.length; i++) {
				if (realChars[i] != inputChars[i]) {
					if (realChars.charCodeAt(i) == 32 && inputChars.charCodeAt(i) == 160) {
						console.log("fixed!");
					}
					else {
						errors++;
					}
				}
			}
			var grossWpm = calculateGrossWpm();
			var netWpm = calculateNetWpm(errors);
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


		// starts timer
		function timer () {
			seconds += 1;
			clockRun = setTimeout(timer, 1000);
		}

});