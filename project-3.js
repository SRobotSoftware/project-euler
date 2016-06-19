// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

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

function lpf() {
	var x = 600851475143
	var out = 0
	var primes = []
	while (x > 1) {
		var i = 2
		while (true) {
			if (isPrime(i) && x % i === 0) {
				x /= i
				primes.push(i)
				break
			}
			i++
		}
	}
	out = Math.max(...primes)
	return out
}

let metric = require('./mymetric.js')
console.log(metric.benchmark(50, lpf))