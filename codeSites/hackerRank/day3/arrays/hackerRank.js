// Given the array=[2 ,3 ,6 ,6 ,5] , we see that the largest value in the array is 6 and the second largest value is 5. Thus, we return 5 as our answer.
// The first line contains an integer,n, the size of the nums array.
// The second line contains n space-separated numbers that describe the elements in nums.
//Sample Input
// 5
// 2 3 6 6 5
//Sample Output
// 5

// function getSecondLargest(convert) {
// 	const nums = convert.split(' ').map(Number);
// 	const arr = nums.sort();
// 	const large = arr.slice(-1)[0];
// 	console.log('large ' + large);
// 	console.log(arr);
// 	const filter = arr.filter((a) => a < large);
// 	console.log(filter);
// 	return filter.slice(-1)[0];
// }

//code works but doesnt pass 2 unknown test
// function getSecondLargest(nums) {
// 	const arr = nums.sort();
// 	const large = arr.slice(-1)[0];
// 	const filter = arr.filter((a) => a < large);
// 	return filter.slice(-1)[0];
// }

// function getSecondLargest(convert) {
// 	const nums = convert.split(' ').map(Number);
// 	console.log(nums);
// 	const unique = Array.from(new Set(nums));
// 	console.log(unique);
// 	const reverseSorted = unique.sort(function(a, b) {
// 		return b - a;
// 	});
// 	console.log(reverseSorted);
// 	const second = reverseSorted[1];
// 	return second;
// }

//final code
function getSecondLargest(nums) {
	const unique = Array.from(new Set(nums));
	const reverseSorted = unique.sort(function(a, b) {
		return b - a;
	});
	const second = reverseSorted[1];
	return second;
}
//OTHER EXAMPLES

// for (let i = 0; i < nums.length; i++) {
// 	if (nums[i] > first) {
// 		second = first;
// 		first = nums[i];
// 	}
// 	if (nums[i] > second && nums[i] < first) {
// 		second = nums[i];
// 	}
// }
// return second;

// function getSecondLargest(nums) {
// 	let largest = nums[0];
// 	let secondLargest = nums[0];
// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i] > largest) {
// 			secondLargest = largest;
// 			largest = nums[i];
// 			continue;
// 		}
// 		if (nums[i] > secondLargest && nums[i] < largest) {
// 			secondLargest = nums[i];
// 		}
// 	}
// 	return secondLargest;
// }

// function getSecondLargest(nums) {
// 	return Array.from(new Set(nums)).sort(function(a, b) {
// 		return b - a;
// 	})[1];
// }
