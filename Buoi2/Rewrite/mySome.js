const numbers = [20, 30, 15, 2]

Array.prototype.mySome = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			return true
		}
	}
	return false
}

const result = numbers.mySome((num) => num > 10)
console.log(result) // true
