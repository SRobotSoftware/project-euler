// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.

// Averages 0.038 ms

function sumSquares() {
	var out = 0
	var i = 1
	while (i <= 100) {
		out += i * i
		i++
	}
	return out
}

function SquareSum() {
	var out = 0
	var i = 1
	while (i <= 100) {
		out += i
		i++
	}
	return out * out
}

function test() {
	var out = SquareSum() - sumSquares()
	return out
}

console.log(test())
let metric = require('./mymetric.js')
console.log(metric.benchmark(50, test))