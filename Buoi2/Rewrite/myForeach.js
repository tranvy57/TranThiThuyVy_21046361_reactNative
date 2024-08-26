const nums = [45, 4, 9, 16, 25]

Array.prototype.myForeach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i])
	}
}

nums.myForeach((num) => console.log(num))
