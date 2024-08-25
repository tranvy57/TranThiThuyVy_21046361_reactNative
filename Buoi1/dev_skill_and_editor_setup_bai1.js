const printForecase = (arr) => {
	arr.forEach((e, index) => {
		console.log(`${e}*C in ${index + 1} days...`)
	})
}

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

printForecase(data1)
printForecase(data2)
