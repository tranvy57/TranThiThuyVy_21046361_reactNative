const numbers = [20, 30, 15, 2]

Array.prototype.myMap = function (callback) {
	const newArray = []
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i]))
	}
	return newArray
}

const newNumbers = numbers.myMap((num) => num * 2)
console.log(newNumbers)
