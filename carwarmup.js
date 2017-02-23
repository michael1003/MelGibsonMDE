var carColor = 'blue';
switch (carColor) { 
case 'blue': 
console.log('you have selected' + ' \'blue\' as your color');
break;
case 'red':
console.log('you have selected' + ' \'red\' as your color');
break;
case 'silver': 
console.log('you have selected' + ' \'silver\' as your color');
break;
default: 
console.log('pick between blue, red, or silver please.'); 
break;
}

//now I will do the same using else if

var carColor = 'blue'; 
if (carColor === 'blue') { 
console.log('you have selected' + ' \'blue\' as your color');
} else if (carColor === 'red') { 
console.log('you have selected' + ' \'red\' as your color');
} else if (carColor === 'silver') { 
console.log('you have selected' + ' \'silver\' as your color');
} else {
	console.log('pick between blue, red, or silver please.');
}


function typeCar(color, type, MPG) { 
 console.log('You want a ' + color + ' ' + type + ' with ' + MPG + ' Miles Per Gallon')
}

typeCar('Blue', 'Nissan Sentra', 34); 
typeCar('Red', 'Honda Accord', 29);
typeCar('Baby Blue', 'Miata', 25);



function milesToKilometers(miles) { 
return miles * 1.6;
}

function getMiles(miles) { 
return milesToKilometers(miles) + 0;
}

console.log('your input is equal to around ' + getMiles(29) + ' kilometers');

//lemme try a simpler and better way to do that, one where I can reference the input number without issue

var milesNumber = 29; {
console.log(milesNumber +' miles is equal to around ' + milesNumber * 1.6 + ' kilometers');
}