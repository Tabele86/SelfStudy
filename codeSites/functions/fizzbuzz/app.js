// function fizzBuzz() {

// 	while(count <==n) {

// if (count % 3 ===0 && count % 5===0){
// 		output.push("FizzBuzz");
// }else if (count % 3 ===0){
// 		output.push("Fizz");
// } else if (count % 5 ===0){
// 		output.push("Buzz");
// } else {
//  output.push(count);
// }
// count++;

// }
// console.log(output);

// }
// function vowelsAndConsonants(s) {
// 	let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

// 	for (let v of s) {
// 		if (vowels.includes(v)) console.log(v);
// 	}
// 	for (let v of s) {
// 		if (!vowels.includes(v)) console.log(v);
// 	}
// }

// function fizzBuzz(n)  {
// 	return n.map((i) => (i % 2 == 0 ? i * 2 : i * 3));
// }

// So, if i is divisible by 3, then it checks whether i is also divisible by 5. If so, it prints "FizzBuzz" otherwise just "Buzz". If i is not divisible by three, then it checks divisibility by 5 again and prints "Fizz" if so, otherwise just i.
function fizzBuzz(n) {
	const arr = Array(n).fill(0).map((e, i) => i + 1);
	// const newArr = arr.join('\n');
	// console.log(newArr);
	const newArr = arr.map((i) => (i % 3 == 0 ? (i % 5 == 0 ? 'FizzBuzz' : 'Fizz') : i % 5 == 0 ? 'Buzz' : i));
	return console.log(newArr.join('\n'));
}

// function modifyArray(nums) {
// 	return nums.map((i) => (i % 2 == 0 ? i * 2 : i * 3));
// }
