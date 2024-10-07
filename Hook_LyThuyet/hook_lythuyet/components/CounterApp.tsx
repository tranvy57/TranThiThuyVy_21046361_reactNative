import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const calculateInitialValue = () => {
	console.log('Calculating initial value...')
	return Math.floor(Math.random() * 100) // Simulates a heavy calculation
}

const CounterApp = () => {
	// Declare a state variable called "count", initially set to 0
	const [count, setCount] = useState(calculateInitialValue)
	return (
		<View style={{ padding: 20 }}>
			<Text>Count: {count}</Text>
			<Button title="Increase" onPress={() => setCount(count + 1)} />
			<Button title="Reset" onPress={() => setCount(0)} />
		</View>
	)
}
export default CounterApp
