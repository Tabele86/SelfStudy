// 4!=4*3*2*1=24

// function factorial(n) {
// 	let factors = [ '' ];
// 	for (let i = n - 1; i > 0; i--) {
// 		factors += i;

// 		// return n * i;
// 	}
// 	console.log(factors);
// }

function factorial(n) {
	if (n > 0) {
		return n * factorial(n - 1);
	}
	return 1;
}
