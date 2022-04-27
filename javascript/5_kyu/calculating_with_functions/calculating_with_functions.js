function expression(number, operation){
	if(!operation)
		return number;
	return operation(number);
}


function two(operation) {
	return (expression(2, operation));
}

function plus(x) {
	return function(y) {
		return y + x;
	}
}

console.log(two(plus(two())));
