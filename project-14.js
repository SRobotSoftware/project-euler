// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

function collatz(x) {
	if (x === 1) return null
	if (x % 2) return x * 3 + 1
	return x / 2
}

function chain(x) {
	var out = 1
	var current = x
	while (current != 1 && current) {
		current = collatz(current)
		out++
	}
	return out
}

function test() {
	var out = 0
	var largest = 0
	var i = 1
	var temp = null
	while (i <= 1000000) {
		temp = chain(i)
		if (temp > largest) {
			largest = temp
			out = i
		}
		i++
	}
	return out
}
console.log(test())