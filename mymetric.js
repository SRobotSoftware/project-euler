let now = require('performance-now')

function testPerformance(funcToTest, arg) {
	let t0 = now()
	let result = funcToTest(arg)
	let t1 = now()
	let out = t1 - t0
	return { perf: out, result: result }
}
function benchmark(repeat, funcToTest) {
	console.log('Running ' + repeat + ' tests...')
	let results = []
	let t0 = now()
	while (repeat) {
		results.push(testPerformance(funcToTest))
		repeat--
	}
	let t1 = now()
	let perfs = results.map((result) => { return result.perf })
	let len = perfs.length
	perfs.sort((a, b) => { return a - b })
	let fastest = perfs[0].toFixed(4)
	let slowest = perfs[perfs.length - 1].toFixed(4)
	let sum = perfs.reduce((prev, curr) => { return prev + curr })
	let average = (sum / len).toFixed(4)
	let t2 = now()
	console.log(len + ' tests took ' + ((t1 - t0) / 1000).toFixed(4) + ' seconds(' + (t1 - t0).toFixed(4) + ') to complete and ' + (t2 - t1).toFixed(4) + ' milliseconds to format.')
	let out = (len + ' tests averaged to: ' + average + ' milliseconds each. F ' + fastest + ' / S ' + slowest + ' / R ' + (slowest - fastest).toFixed(4))
	return out
}

exports.benchmark = benchmark

// To Use:
// let metric = require('./mymetric.js')
// console.log(metric.benchmark(50, funcToTest))