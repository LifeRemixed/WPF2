//Functions - Personal
//An anonymous function

var calcPay = function (rate, hours){
	var payAmount = rate * hours;
	return payAmount;
}

var payAmount = calcPay(15, 40);

console.log (payAmount)
