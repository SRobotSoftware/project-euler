// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

function buildNodes(x) {
	var out = new Array(x)
	var nodes = new Array(x)
	nodes.fill(2)
	nodes[nodes.length - 1] -= 1
	out.fill(nodes)
	return out
}
console.log(buildNodes(3))