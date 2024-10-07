import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { DeviceEventEmitter } from 'react-native'
const UseEffect2 = () => {
	const [eventData, setEventData] = useState(null)
	useEffect(() => {
		const subscription = DeviceEventEmitter.addListener('eventName', (data) => {
			setEventData(data)
		})
		return () => {
			subscription.remove() // Cleanup subscription on unmount
		}
	}, []) // Empty array means this runs once on mount
	return (
		<View>
			<Text>{eventData ? JSON.stringify(eventData) : 'No data yet'}</Text>
		</View>
	)
}

export default UseEffect2
