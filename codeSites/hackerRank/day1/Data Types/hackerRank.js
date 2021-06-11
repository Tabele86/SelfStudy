const firstInteger = 4;
const secondInteger = '4';
function add(firstInteger, secondInteger) {
	return firstInteger + parseInt(secondInteger);
}
console.log(add(firstInteger, secondInteger));

const firstDecimal = 4.0;
const secondDecimal = '4.4';
function add(firstDecimal, secondDecimal) {
	return firstDecimal + parseFloat(secondDecimal);
}
console.log(add(firstDecimal, secondDecimal));

const firstString = 'HackerRank ';
const secondString = 'Rules';
function concat(firstString, secondString) {
	return firstString + secondString;
}
console.log(concat(firstString, secondString));
