// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(x) {
	var out = true;
	for (var i = x - 1; i > 1; i--) {
		if (x%i === 0) out = false;
	}
	return out;
}

function lpf(x) {
	var out = 0;
	var primes = [];
	while (x > 1) {
		for (var i = 2; true; i++) {
			if (isPrime(i)) {
				if (x % i === 0) {
					console.log(x + " / " + i);
					x /= i;
					primes.push(i);
					break;
				}
			}
		}
	}
	out = Math.max(...primes);
	return out;
}

console.log(lpf(600851475143));