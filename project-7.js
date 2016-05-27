// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(x) {
	var out = true;
	for (var i = x - 1; i > 1; i--) {
		if (x%i === 0) out = false;
	}
	return out;
}

var results = 0;
console.log("Starting loop");
for (var i = 2; results < 10001; i++) {
	if (isPrime(i)) {
		results++;
	}
}
console.log("Finished");
console.log(i-1);