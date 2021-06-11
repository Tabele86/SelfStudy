// adfgt
//limited experience with switch but mine was wrong
// function getLetter(s) {
// 	let letter;
// 	let s = word;
// 	switch (word) {
// 		case word[0] === 'a':
// 			console.log('A');
// 			break;
// 	}
// 	return letter;
// }

//correct
function getLetter(s) {
	let letter;
	switch (true) {
		case 'aeiou'.includes(s[0]):
			letter = 'A';
			break;
		case 'bcdfg'.includes(s[0]):
			letter = 'B';
			break;
		case 'hjklm'.includes(s[0]):
			letter = 'C';
			break;
		case 'npqrstvwxyz'.includes(s[0]):
			letter = 'D';
			break;
		default:
			letter = 'Please enter a string';
	}
	return letter;
}
