// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

// Averages 93.8507 ms

function pythag(x, y, z) {
	var test = x * x + y * y
	var test2 = z * z
	if (test === test2) return true
	return false
}

function pythagTrip(x, y, z) {
	if (pythag(x, y, z)) return true
	return false
}

// x + y + z === 1000

function test() {
	var a = 1
	while (a < 332) {
		var b = a + 1
		while (b < 499) {
			var c = b + 1
			while (c < 997) {
				if (a + b + c === 1000 && pythagTrip(a, b, c)) return a * b * c
				c++
			}
			b++
		}
		a++
	}
	return 0
}

console.log(test())
let metric = require('./mymetric.js')
console.log(metric.benchmark(50, test))