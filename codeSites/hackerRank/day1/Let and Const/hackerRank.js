function main(r) {
	// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
	const radius = r;
	const PI = Math.PI;
	const area = PI * (radius * radius);
	const perimeter = 2 * PI * radius;
	// Print the area of the circle:
	console.log(area);
	// Print the perimeter of the circle:
	console.log(perimeter);
	try {
		// Attempt to redefine the value of constant variable PI
		PI = 0;
		// Attempt to print the value of PI
		console.log(PI);
	} catch (error) {
		console.error("You correctly declared 'PI' as a constant.");
	}
}

function main() {
	// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
	const r = readLine();
	const PI = Math.PI;
	const area = PI * (r * r);
	const perimeter = 2 * PI * r;
	// Print the area of the circle:
	console.log(area);
	// Print the perimeter of the circle:
	console.log(perimeter);
	try {
		// Attempt to redefine the value of constant variable PI
		PI = 0;
		// Attempt to print the value of PI
		console.log(PI);
	} catch (error) {
		console.error("You correctly declared 'PI' as a constant.");
	}
}
