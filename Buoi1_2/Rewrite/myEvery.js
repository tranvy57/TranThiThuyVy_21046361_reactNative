const arr = [20, 30, 15, 2]

Array.prototype.myEvery = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (!callback(this[i])) {
			return false
		}
	}
	return true
}

const result = arr.myEvery((num) => num > 10)
console.log(result)
