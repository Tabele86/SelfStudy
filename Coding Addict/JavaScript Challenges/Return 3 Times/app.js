// console.log('return 3 times') return 3 times
// function example(a, b) {
// 	return function(c, d) {
// 		return function(e, f) {
// 			console.log(a, b, c, d, e, f);
// 			return a * c * e + b * d * f;
// 		};
// 	};
// }

//refactored
const example = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;
console.log(example(1, 2)(3, 4)(5, 6)); //63
console.log(example(1, 2)(1, 2)(3, 4)); //19
console.log(example(1, 2)(0, 1)(0, 5)); //10
