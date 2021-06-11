// Sample Input 0
// 3
// 1
// 2
// 3
// Sample Output 0
// YES
// YES
// YES
// Sample Input 1
// 3
// 2
// 0
// 6
// Sample Output 1
// YES
// Zero Error
// YES

function isPositive(a) {
	//if a is zero throw zero error
	if (a == 0) throw new Error('Zero Error');
	else if (a < 0)
		//if a is less than 0 throw negative error
		throw new Error('Negative Error');
	else
		//anything else return YES
		return 'YES';
}

//final code
// function isPositive(a) {
//     if (a == 0) throw new Error('Zero Error');
//     else if (a < 0) throw new Error('Negative Error');
//     else return 'YES';
// }
