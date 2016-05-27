// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2- digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(num) {
	var digits = (num + "").split("");
	// take second half of array
	var half = Math.floor(digits.length/2-1);
	var temp = [];
	for (var i = half, j = 0; i <= digits.length; i++) {
		temp.push(digits.splice(digits.length-1,1)+"");
	}
	// check arrays against each other
	if (digits.length > temp.length || temp.length > digits.length) return false;
	if (digits.toString() == temp.toString()) return true;
	return false;
}

// test
var result = 0;
for (var i = 999; i > 99; i--) {
	for (var j = 999; j > 99; j--) {
		var test = i * j;
		if (checkPalindrome(test)) {
			if (test > result) result = test;
		}
	}
}
console.log("Palindrome found: " + result);