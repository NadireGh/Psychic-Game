

var alphabet=['a','n'];
var numGuess=  10;  //number of guesses
var userGuessed=[]; //letters user guessed
var loseCounter=[0]; 
var winCounter=[0]; 
// var losses=loseCounter;
// var wins=winCounter;
var amountOfGuess=numGuess;


function randomizer (alphabet) {
	return alphabet[Math.floor(Math.random()* alphabet.length)];
}


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess=randomizer(alphabet);
		
	if (userGuess== computerGuess) {
		console.log("yesCorrect", userGuessed);
		document.getElementById("winCounter").innerHTML= (winCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		(winCounter+=1);

		// document.getElementById("userGuessed").innerHTML=(userGuessed.length);
		
	} else {
		console.log("not", numGuess, userGuessed);
		document.getElementById("loseCounter").innerHTML= (loseCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		numGuess--;
		// (loseCounter+=1);
		document.getElementById("numGuess").innerHTML=(numGuess);
		// document.getElementById("userGuessed").innerHTML=(userGuessed.indexOf);
		
	}
	if (numGuess===0 ) {
		// reset.resetGame()
		alert("Opps, You lose!");
		reset.resetGame();
		loseCounter+=1;
		userGuessed=[];

	
	};
}


var reset = {
	resetGame: function() {
		if(numGuess==0) {
			document.onekeyup=false;
			numGuess=10;
			userGuessed=[];
		}
	}
}