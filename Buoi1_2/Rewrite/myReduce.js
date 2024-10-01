const numbers = [20, 30, 15, 2]

Array.prototype.myReduce = function (callback, initialValue) {
	let accumulator = initialValue
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i])
	}
	return accumulator
}

const sum = numbers.myReduce((acc, num) => acc + num, 0)

console.log(sum) // 67
