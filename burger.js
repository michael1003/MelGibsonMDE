//burger price calculator, with tax. Burgers are 8.5 bucks and tax is 5%

var orderCount= 3;

function getSubTotal(itemCount){ 
return itemCount * 8.5;
}

function getTax(itemCount){ 
return getSubTotal(orderCount) * 0.05;
}

function getTotal(){ 
return getSubTotal(orderCount) + getTax();
}

console.log('Your subtotal is ' + '$' + getSubTotal(orderCount));

//calls the sub total into the console 

console.log('Your total is ' + '$' + getTotal());

// calls the final function block into the console
