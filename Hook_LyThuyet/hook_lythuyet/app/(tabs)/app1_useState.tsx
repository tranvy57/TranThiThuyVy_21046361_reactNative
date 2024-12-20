import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1
export default function App1() {
	const [diceRolls, setDiceRolls] = useState<number[]>([])
	return (
		<View>
			<Button
				title="Roll dice!"
				onPress={() => {
					setDiceRolls([...diceRolls, randomDiceRoll()])
				}}
			/>
			{diceRolls.map((diceRoll, index) => (
				<Text style={{ fontSize: 24 }} key={index}>
					{diceRoll}
				</Text>
			))}
		</View>
	)
}
