var bank = {
	amanuel: {
		fullname: 'Amanuel Debebe',
		balance: 0,
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
	if (current.balance < 10) {
		alert('Deposit is low');
		return;
	} else {
		current.balance -= val;
		balance();
	}
}

function transfer(val, to = 'DEBEBE') {
	if (current.balance < 10) {
		alert('Deposit is low');
		return;
	} else {
		current.balance -= val;
		bank[to]?.balance += val;
		balance();
	}
}

function createAccount(name, psd) {
	bank[name] = {
		password: psd,
		balance: 0
	};
}

function login(name, psd) {
	if(bank[name][password] === psd){
		return current = bank[name];
	} else{
		alert("Incoorect username or password");
	}
}

(() => {
	alert('What do you want to do?');
	var a = prompt('1.To Deposit enter 1\n2.To check balance enter 2\n3.to withdraw enter 3\n4. to transfer enter 4');
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
