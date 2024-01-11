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
	for (let i = 0; i < n; i++) {
		str += String.fromCharCode(generateRandomCode());
	}
	return str;
}
console.log(makeid(5)); 
console.log(makeid(10));

// function makeid(length) {
//   const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     result += charset.charAt(randomIndex);
//   }

//   return result;
// }

// // Examples
// // console.log(makeid(5)); // e.g., "K3f2G"
// // console.log(makeid(10)); // e.g., "aB9EfgT2X1"

// console.log(makeid(5));
// console.log(makeid(10));;
// Do not change the code below.
const n = prompt("Enter a number.");
alert(makeid(n));
