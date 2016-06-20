// 2520 is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?

// Averages 837.6279 ms

function divisibleUnder20(num) { // 232792560
	if (num % 2 || num % 3 || num % 5) return false
	var i = 20
	while (i > 5) {
		if (num % i) return false
		i--
	}
	return true
}

function test() {
	var i = 1
	while (i < 1000000000) {
		if (divisibleUnder20(i)) return i
		i++
	}
}

let metric = require('./mymetric.js')
console.log(metric.benchmark(50, test))