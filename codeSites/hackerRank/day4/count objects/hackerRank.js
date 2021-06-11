// Basic for Loop
// const arr = ['a', 'b', 'c', 'd'];

//  'i' is the index
// for (let i = 0; i < arr.length; i++) {
//     console.log('arr[' + i + ']: ' + arr[i]);
// }

function getCount(objects) {
	let c = 0;
	for (const i in objects) {
		if (objects[i].x == objects[i].y) {
			c++;
		}
	}
	return c;
}

function getCount(objects) {
	let c = 0;
	objects.forEach(function(i) {
		if (i.x == i.y) c++;
	});
	return c;
}

//hackerank code
// function main() {
// 	const n = +readLine();
// 	let objects = [];

// 	for (let i = 0; i < n; i++) {
// 		const [ a, b ] = readLine().split(' ');

// 		objects.push({ x: +a, y: +b });
// 	}

// 	console.log(getCount(objects));
// }
