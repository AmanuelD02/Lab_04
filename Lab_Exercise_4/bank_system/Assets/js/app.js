var bank = {
	amanuel: {
		fullname: 'Amanuel Debebe',
		balance: 1991,
		password: 'qwe'
	},
	debebe: {
		fullname: 'Debebe Lakew',
		balance: 0,
		password: 'asd'
	}
};

var current = bank.amanuel;
var debebe = bank.debebe;

function balance() {
	alert(`Current Balance: ${current.balance}`);
}
function dep(val) {
	current.balance += val;
	balance();
}

function withdraw(val) {
	if (current.balance - val < 10) {
		alert('Deposit is low');
		return;
	} else {
		current.balance -= val;
		balance();
	}
}

function transfer(val, to = 'DEBEBE') {
	if (current.balance - val < 10) {
		alert('Deposit is low');
		return;
	} else {
		current.balance -= val;
		bank.to && bank.to.balance ? (bank.to.balance += val) : 0;
		balance();
	}
}

(() => {
	alert('WELCOME TO AM INTERNATIONAL BANK');
	while (true) {
		var a = prompt(
			'What do you want to do?\n\n1.To Deposit enter 1\n2.To check balance enter 2\n3.to withdraw enter 3\n4. to transfer enter 4\nTo exit Enter any other key'
		);
		switch (a) {
			case '1':
				var d = prompt('Enter The amount');
				dep(d);
				break;
			case '2':
				balance();
				break;
			case '3':
				var w = prompt('Enter The amount');
				withdraw(w);
				break;
			case '4':
				var w = prompt('Enter The amount');
				var t = prompt('Enter the person to transfer');
				transfer(w, t);
			default:
				alert('Thank You! Come Again');
				return;
		}
	}
})();
