// 2520 is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?

function divisible(divider, num) {
	for (var i = divider; i > 0; i--) {
		if (num % i) return false;
	}
	return true;
}

console.log("Start");
for (var i = 1; i < 1000000000; i++) {
	if(divisible(20, i)) console.log(i);
}
console.log("Stop");