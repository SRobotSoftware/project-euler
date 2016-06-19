// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// function isPrime(x) {
// 	var out = true;
// 	for (var i = x - 1; i > 1; i--) {
// 		if (x%i === 0) out = false;
// 	}
// 	return out;
// }

// First run

// function isPrime(x) {
// 	if (x % 2 === 0) return false;
// 	if (x % 3 === 0) return false;
// 	var m = Math.sqrt(x);
// 	for (var i = 5; i <= m; i += 6) {
// 		if (x % i === 0) return false;
// 		if (x % (i + 2) === 0) return false;
// 	}
// 	return true;
// }

// var results = [2, 3];
// console.log("Starting loop");
// for (var i = 5; i < 2000000; i++) {
// 	if (isPrime(i)) {
// 		results.push(i);
// 	}
// }
// console.log("Finished finding primes");
// console.log("Primes Found: " + results.length + " Final number checked: " + (i - 1));
// console.log("summing array");
// var result = 0;
// while (results.length) {
// 	result += results.pop();
// }
// console.log("Finished");
// console.log(result);


// Refactored

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
function findPrime() {
	var results = []
	var i = 2
	while (i < 2000000) {
		if (isPrime(i)) results.push(i)
		i++
	}
	var result = results.reduce((p, c) => { return p + c })
	return result
}

let metric = require('./mymetric.js')
console.log(metric.benchmark(50, findPrime))