//   Implement a Polygon class with the following properties:
//  1. A constructor that takes an array of integer side lengths.
//   2. A 'perimeter' method that returns the sum of the Polygon's side lengths.

// Create a polygon with side lengths 3, 4, and 5
function Polygon([ a, b, c, d, e = 0 ]) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.e = e;
	this.perimeter = function() {
		return a + b + c + d + e;
	};
}

// let triangle = new Polygon([ 3, 4, 5 ]);

// // Print the perimeter
// console.log(triangle.perimeter());
const rectangle = new Polygon([ 10, 20, 10, 20 ]);
const square = new Polygon([ 10, 10, 10, 10 ]);
const pentagon = new Polygon([ 10, 20, 30, 40, 43 ]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
