console.log('Mel Gibson has made some pretty good movies recently')

var melGibson = 61;
if (melGibson < 61) {
	console.log('Mel gibson was an anti-semite');
} else if (melGibson === 61) {
	console.log('he\'s a changed man');
} else if (melGibson > 61) {
	console.log('he\'s and old man');
} else {
	console.log('you should input an age into \'var melGibson\'');
}

var isMelRacist = false; 

if (isMelRacist === false) {
	console.log('Good for him!');
} else if (isMelRacist === true) {
	console.log('He\'s a racist?! Uh oh, no movies for Mel!');
} else {
	console.log('true or false');
}


var numberMan = Math.floor(Math.random()*5000);

console.log(numberMan);

if (numberMan > 2500) {
	console.log('this number is greater than 2500');
} else if (numberMan === 5000) {
	console.log('this number is equal to 5000');
} else {
	console.log ('this number is less than 2500');
}

//you might have to run that multiple times to get both greater than
//and less than outcomes.

/*
console.log('MDE Never Dies'); 
console.log('Sam Hyde for President');
console.log('Lena Dunham for Sam Hyde');
*/

console.log('Question: what is the remainder of 24 divided by 9?');
console.log(24%9);

var samHyde = 'is Sam Hyde in the room? '+ true;
console.log(samHyde);

var chazCaroll = 'is Chaz Caroll in the room? '+ true;
console.log(chazCaroll);

if (samHyde && chazCaroll) {
	console.log('Both Sam and Chaz are in the same room.')
}

