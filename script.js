function generateRandomCode() {
	let num = parseInt(Math.random() * 100);
	if ((48 <= num && num <= 57) || (65 <= num && num <= 90) || (97 <= num && nu <= 122)) {
		return num;
	}
	return 100 + parseInt(num / 5);
}
function makeid(n) {
  // write your code here
	let str = "";
	for (let i = 0; i < n.length; i++) {
		str += String.fromCharCode(generateRandomCode());
	}
	return str;
}
console.log(makeid(n));
// Do not change the code below.
const n = prompt("Enter a number.");
alert(makeid(n));
