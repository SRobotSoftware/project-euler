// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2- digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Averages 299.9361ms

function checkPalindrome(num) {
	var digits = (num + '').split('')
	if (digits[0] != digits[digits.length - 1]) return false
	var half = Math.floor(digits.length / 2 - 1)
	var temp = []
	temp = digits.splice(half + 1, half + 1).reverse()
	if (digits.length != temp.length) return false
	var i = digits.length
	while (i) {
		if (digits[i] != temp[i]) return false
		i--
	}
	return true
}

// test
function test() {
	var result = 0
	var i = 999
	while (i > 99) {
		var j = 999
		while (j > 99) {
			var test = i * j
			if (checkPalindrome(test) && test > result) result = test
			j--
		}
		i--
	}
	var out = 'Palindrome found: ' + result
	return out
}
let metric = require('./mymetric.js')
console.log(metric.benchmark(50, test))