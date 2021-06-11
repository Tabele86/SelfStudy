/*
//  * Complete the reverseString function
//  * Use console.log() to print to stdout.
 */
// s=Number(1234)
// s="1234"
function reverseString(s) {
	try {
		s = s.split('').reverse().join('');
	} catch (e) {
		console.log(e.message);
	} finally {
		console.log(s);
	}
}

// function reverseString(s) {
// 	try {
// 		function reverseS(s) {
// 			s.split('').reverse().join('');
// 		}
// 		reverseS(s);
// 	} catch (error) {
// 		console.log('s.split is not a function');
// 	} finally {
// 		console.log(s);
// 	}
// }

// (function() {
// 	try {
// 		try {
// 			throw new Error('oops');
// 		} catch (ex) {
// 			console.error('inner', ex.message);
// 			throw ex;
// 		} finally {
// 			console.log('finally');
// 			return;
// 		}
// 	} catch (ex) {
// 		console.error('outer', ex.message);
// 	}
// })();

// Output:
// "inner" "oops"
// "finally"
