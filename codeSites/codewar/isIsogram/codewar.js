//https://www.codewars.com/kata/54ba84be607a92aa900000f1
//example
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
//   }

// function isIsogram(str) {
// 	const check = !str.match(/(.).*\1/i); //regexp
// 	return check;
// }

function isIsogram(str) {
	return !str.match(/(.).*\1/i); //regexp
}
//https://regexr.com/
//(.) Capturing Group 1
//Dot matches any character except line breaks.
//Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
// .*
//Dot matches any character except line breaks.
//Quantifier Match 0 or more of the preceding token
