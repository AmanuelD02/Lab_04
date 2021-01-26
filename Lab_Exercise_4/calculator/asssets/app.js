var calculator = {
	add: (values) => {
		return values.reduce((x, y) => x + y);
	},
	subs: (var1, var2) => {
		return var1 - var2;
	},
	mult: (values) => {
		return values.reduce((x, y) => x * y);
	},
	div: (var1, var2) => {
		return var1 / var2;
	},
	max: (values) => {
		return Math.max(...values);
	},
	min: (values) => {
		return Math.min(...values);
	},
	avg: (values) => {
		let total = 0;
		for (let n of values) {
			total += n;
		}

		return values.length === 0 ? 'Array Empty' : total / values.length;
	},
	sqrt: (value) => {
		return Math.sqrt(value);
	}
};

function num_collector() {
	let nums = prompt('How Many Numbers? ');
	let values = Array();
	for (let i = 0; i < parseInt(nums); i++) {
		values[i] = Number(prompt('Enter Num ' + (i + 1)));
	}
	return values;
}

// IIFES
(function() {
	var o = prompt(
		'*********************************\n BASIC CALCULATOR\n 1.Enter + for addition\n 2. Enter * for multiplication\n 3. Enter / for division\n 4. Enter 1 to calculate min\n 5. Enter 2 to calculate max\n 6. Enter 3 to calculate average\n 7. Enter 4 to calulate square root of a number\n********************************'
	);
	if (o == '+') {
		values = num_collector();
		alert(`Summation : ${calculator.add(values)}`);
	} else if (o == '*') {
		values = num_collector();
		alert(`Product : ${calculator.mult(values)}`);
	} else if (o == 1) {
		values = num_collector();
		alert(`The Minimum value is ${calculator.min(values)}`);
	} else if (o == 2) {
		values = num_collector();
		alert(`The Maximum value is ${calculator.max(values)}`);
	} else if (o == 3) {
		values = num_collector();
		alert(`The Average is ${calculator.avg(values)}`);
	} else if (o == 4) {
		var var1 = Number(prompt('Enter the number: '));
		alert(`The Square root if ${var1} is ${calculator.sqrt(var1)}`);
	} else {
		var var1 = Number(prompt('Enter num1 '));
		var var2 = Number(prompt('Enter num 2'));
		switch (o) {
			case '+':
				alert('Sum :' + calculator.add(var1, var2));
				break;
			case '-':
				alert(`Difference: ${calculator.subs(var1, var2)}`);
				break;
			case '*':
				alert(`Product:  ${calculator.mult(var1, var2)}`);
				break;
			case '/':
				if (var2 == 0) {
					alert('Division by zero is undefined');
				} else {
					alert(`Answer: ${calculator.div(var1, var2)}`);
				}
				break;
			default:
				alert('Unsuppoted Operator');
		}
	}
})();
