const numbers = [20, 30, 15, 2]

Array.prototype.myAny = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			return false
		}
	}
	return true
}

const result = numbers.myAny((num) => num > 10)
console.log(result) // true
