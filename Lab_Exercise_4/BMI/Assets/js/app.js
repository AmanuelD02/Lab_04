function BMI(height, weight) {
	return weight / Math.pow(height, 2) * 10000;
}

(() => {
	alert('***************************\n   BMI CALCULATOR\n***************************');

	var h = prompt('Enter Height in centimeter');
	var w = prompt('Enter Weight in Kilogram');
	var b = BMI(h, w);
	alert('Your Bmi is : ' + b.toFixed(2));
	if (b < 18.5) alert('Your are : Underweight');
	else if (b >= 18.5 && b <= 24.9) alert('Your are : Normal');
	else if (b >= 25.0 && b <= 29.9) alert('Your are : Overweight');
	else if (b >= 30.0) alert('Your are : Obese');
})();
