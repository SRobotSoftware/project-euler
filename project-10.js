// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// function isPrime(x) {
// 	var out = true;
// 	for (var i = x - 1; i > 1; i--) {
// 		if (x%i === 0) out = false;
// 	}
// 	return out;
// }

function isPrime(x) {
	if (x % 2 === 0) return false;
	if (x % 3 === 0) return false;
	var m = Math.sqrt(x);
	for (var i = 5; i <= m; i += 6) {
		if (x % i === 0) return false;
		if (x % (i + 2) === 0) return false;
	}
	return true;
}

var results = [2,3];
console.log("Starting loop");
for (var i = 5; i < 2000000; i++) {
	if (isPrime(i)) {
		results.push(i);
	}
}
console.log("Finished finding primes");
console.log("Primes Found: " + results.length + " Final number checked: " + (i-1));
console.log("summing array");
var result = 0;
while (results.length) {
    result += results.pop();
}
console.log("Finished");
console.log(result);