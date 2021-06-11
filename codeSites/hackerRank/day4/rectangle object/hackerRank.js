// Sample Input 0
// 4
// 5
// Sample Output 0
// 4
// 5
// 18
// 20
// Given a length of a=4 and width b=5, the rectangle objects perimeter is 4+4+5+5=18 area is 4*5=20

//Using a Constructor Function
function Rectangle(a, b) {
	this.length = a;
	this.width = b;
	this.perimeter = a + a + b + b;
	this.area = a * b;
}

//hackerank code
// function main() {
// 	const a = +readLine();
// 	const b = +readLine();

// 	const rec = new Rectangle(a, b);

// 	console.log(rec.length);
// 	console.log(rec.width);
// 	console.log(rec.perimeter);
// 	console.log(rec.area);
// }
