import React, { createContext, useContext } from 'react'
import { View, Text, Button } from 'react-native'

// Create the context
const UserContext = createContext<{ name: string; age: number } | null>(null)

const App = () => {
	const user = { name: 'John Doe', age: 30 }
	return (
		<UserContext.Provider value={user}>
			<UserProfile />
		</UserContext.Provider>
	)
}

const UserProfile = () => {
	const user = useContext(UserContext)
	if (!user) return null
	return (
		<View>
			<Text>Name: {user.name}</Text>
			<Text>Age: {user.age}</Text>
		</View>
	)
}

export default App
