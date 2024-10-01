// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")

// 4. Run the function for both test datasets

//1

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

const checkDogs = (dogsJulia, dogsKate) => {
	const dogsJuliaCorrected = dogsJulia.slice(1, -2)
	const dogs = dogsJuliaCorrected.concat(dogsKate)
	dogs.forEach((dog, index) => {
		console.log(`Dog number ${index + 1} is ${dog >= 3 ? 'an adult' : 'still a puppy'}`)
	})
}

checkDogs(dogsJulia, dogsKate)

//2
const dogsJulia2 = [9, 16, 6, 8, 3]
const dogsKate2 = [10, 5, 6, 1, 4]

checkDogs(dogsJulia2, dogsKate2)

//3
const dogsJulia3 = [9, 16, 6, 8, 3]
const dogsKate3 = [10, 5, 6, 1, 4]

checkDogs(dogsJulia3, dogsKate3)
