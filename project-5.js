// 2520 is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?

function divisible(divider, num) { // 232792560
	while (divider > 1) {
		if (num % divider) return false
		divider--
	}
	return true
}

function divisible2(num) { // needs tweaking, currently giving 9699690
	if (num % 2 || num % 3 || num % 5 || num % 7 || num % 11 || num % 13 || num % 17 || num % 19) return false
	return true
}

function test() {
	var i = 1
	while (i < 1000000000) {
		if (divisible(20, i)) return i
		i++
	}
}

let metric = require('./mymetric.js')
// console.log(metric.benchmark(50, test))
console.log(test())