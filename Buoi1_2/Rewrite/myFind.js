const numbers = [20, 30, 15, 2]
Array.prototype.myFind = function (callback) {
	let result = undefined
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			result = this[i]
			break
		}
	}
	return result
}

const foundNumber = numbers.myFind((num) => num > 10)
console.log(foundNumber)
