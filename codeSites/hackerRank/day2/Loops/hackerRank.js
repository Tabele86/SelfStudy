// example output
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
//
/*
//  * Complete the vowelsAndConsonants function.
//  * Print your output using 'console.log()'.
//  */
// function vowelsAndConsonants(s) {
// 	let
//     console.log(s)
// }
// const s = 'javascriptloops';
function vowelsAndConsonants(s) {
	let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	for (let v of s) {
		if (vowels.includes(v)) console.log(v);
	}
	for (let v of s) {
		if (!vowels.includes(v)) console.log(v);
	}
}
// function vowelsAndConsonants(s) {
// 	let word = s.length;
// 	for (var i = 1; i < word; i += 1) {
// 		console.log(i);
// 	}
// const vowels = 'aaioo';
// const cons = 'jvscrptlp';
// console.log(vowels.split('').toString());
// console.log(cons.split('').toString());
// console.log(s);
// }
