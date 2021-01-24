var firstName;
var lastName;
var age;
var profession;
//number of family
let numberOfFamily;
// input
firstName = prompt('Enter Your First name');
lastName = prompt('Enter Your last name');
age = prompt('Enter Your Age');
profession = prompt('Enter your profession');
//family storage array
let familyMember = new Array();
numberOfFamily = prompt('Number of Family  ? ');
for (let i = 0; i < parseInt(numberOfFamily); i++) {
	familyMember[i] = prompt('Your Family  Members ' + (i + 1));
}

//Receiving the family number

// output
console.log('*********************************');
console.log('Here is your Profile');
console.log(`Full Name: ${firstName} ${lastName}`);
console.log(`Age: ${age}`);
console.log(`profession: ${profession}`);
console.log(age > 18 ? 'Is eligible to vote' : 'Is not Eligible to Vote');

console.log('Family Members ');
//Displaying the family member with foreach
familyMember.forEach(function(member) {
	console.log('Family Member  ' + (this.index + 1) + ' : ' + member);
});

console.log('*********************************');
