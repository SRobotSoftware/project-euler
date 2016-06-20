// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// Averages 12.4671 ms

function isPrime(x) {
	if ((x != 2 && x != 3) && (x % 2 === 0 || x % 3 === 0)) return false
	var m = Math.sqrt(x)
	var i = 5
	while (i <= m) {
		if (x % i === 0 || x % (i + 2) === 0) return false
		i += 6
	}
	return true
}

function test() {
	var results = 0
	var i = 2
	while (results < 10001) {
		if (isPrime(i)) {
			results++
		}
		i++
	}
	return i - 1
}

console.log(test())
let metric = require('./mymetric.js')
console.log(metric.benchmark(50, test))