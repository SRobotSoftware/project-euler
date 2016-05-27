// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

function pythag(x, y, z) {
	var test = x * x + y * y;
	var test2 = z * z;
	if (test === test2) return true;
	return false;
}

function trip(x, y, z) {
	if (x < y && y < z) return true;
	return false;
}

function pythagTrip(x, y, z) {
	if (!pythag(x, y, z)) return false;
	if (!trip(x, y, z)) return false;
	return true;
}

// x + y + z === 1000

function test() {
	for (var a = 0; a < 1000; a++) {
		for (var b = 0; b < 1000; b++) {
			for (var c = 0; c < 1000; c++) {
				if (a + b + c === 1000) {
					if (pythagTrip(a, b, c)) return "Result: " + a + " " + b + " " + c + ". Product: " + (a*b*c);
				}
			}
		}
	}
	return "No Result Found";
}