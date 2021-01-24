var bank = {
	fullname: 'Amanuel',
	id: 0,
	balance: 0
};

var aman = bank;
var debebe = bank;
debebe.fullname = 'Debebe';

function balance() {
	console.log(`Current Balance: ${aman.balance}`);
}
function dep(val) {
	aman.balance += val;
	balance();
}

function withdraw(val) {
	if (aman.balance < 10) {
		console.log('Deposit is low');
		return;
	} else {
		aman.balance -= val;
		balance();
	}
}

function transfer(val, to = 'DEBEBE') {
	if (aman.balance < 10) {
		console.log('Deposit is low');
		return;
	} else {
		aman.balance -= val;
		debebe.balance += val;
		balance();
	}
}

(function init() {
	console.log('What do you want to do?');
	var a = prompt('1.Deposit\n2.balance\n3.withdraw\n4.transfer');
	switch (a) {
		case '1':
			var d = prompt('Enter The amount');
			dep(d);
			break;
		case '2':
			balance();
			break;
		case '3':
			var w = prompt('enter The amount');
			withdraw(w);
			break;
		case '4':
			var w = prompt('enter The amount');
			var t = prompt('Enter the person to transfer');
			transfer(w, t);
	}
})();
