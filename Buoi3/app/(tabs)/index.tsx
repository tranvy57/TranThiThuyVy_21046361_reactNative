import { Image, StyleSheet, Platform, View, Text, Button, TouchableOpacity } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

import Man2 from '@/components/Man2'
import { LinearGradient } from 'expo-linear-gradient'
import Man4 from '@/components/Man4'
import Man5 from '@/components/Man5'
import Man6 from '@/components/Man6'

export default function HomeScreen() {
	return <Man6 />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
	},
	button: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5,
	},
	text: {
		backgroundColor: 'transparent',
		fontSize: 15,
		color: '#fff',
	},
})
