// task
// if 25 < score <= 30, then grade = A
// if 20 < score <= 25, then grade = B
// if 15 < score <= 20, then grade = C
// if 10 < score <= 15, then grade = D
// if 5 < score <= 10, then grade = E
// if 0 < score <= 5, then grade = F

//sample input
// score=11
//sample output
// D
function getGrade(score) {
	if (score >= 25) {
		grade = 'A';
	} else if (score >= 20) {
		grade = 'B';
	} else if (score >= 15) {
		grade = 'C';
	} else if (score >= 10) {
		grade = 'D';
	} else if (score >= 5) {
		grade = 'E';
	} else if (score >= 0) {
		grade = 'F';
	}
	return grade;
}
