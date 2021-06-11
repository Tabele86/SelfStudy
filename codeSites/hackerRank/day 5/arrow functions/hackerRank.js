// Objective

// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Sample Input 0
// 5
// 1 2 3 4 5
// Sample Output 0
// 3 4 9 8 15

// [ 1, 2, 3, 4, 5 ]
//arrow function plus
//ternary operator
//conditon ? expIfTrue : expIfFalse
//maps through nums and checks if i is even ?
//multiply i by 2 else(:) ,ultiply by 3

function modifyArray(nums) {
	return nums.map((i) => (i % 2 == 0 ? i * 2 : i * 3));
}

//non arrow function answer
// function modifyArray(nums) {
// 	let res = [];
// 	for (const e of nums) {
// 		if (e % 2 == 0) res.push(e * 2);
// 		else res.push(e * 3);
// 	}
// 	return res;
// }
