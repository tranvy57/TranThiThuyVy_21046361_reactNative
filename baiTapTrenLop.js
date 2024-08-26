const numbers = [20, 30, 15, 2]

// Array.prototype.myFilter = function (num) {
// 	const newArray = []
// 	for (let i = 0; i < this.length; i++) {
// 		if (this[i] > num) {
// 			newArray.push(this[i])
// 		}
// 	}
// 	return newArray
// }

// const newNumbers = numbers.myFilter(10)
// console.log(newNumbers)

Array.prototype.myFilter = function (callback) {
	const newArray = []
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			newArray.push(this[i])
		}
	}
	return newArray
}

const newNumbers = numbers.myFilter((num) => num > 10)
