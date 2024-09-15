import { Image, StyleSheet, Platform, View, Text, Button, TouchableOpacity } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
	return (
		<View style={[styles.container, { backgroundColor: '#00CCF9' }]}>
			<View style={[styles.row, { flex: 2 }]}>
				<View style={styles.circle}></View>
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
					GROW{'\n'}YOUR BUSINESS
				</Text>
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
					We will help you to grow your business using online server
				</Text>
			</View>
			<View style={[styles.row, { flex: 1 }, styles.buttongroup]}>
				<TouchableOpacity
					style={{
						width: 100,
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#E3C000',
					}}
				>
					<Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						width: 100,
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#E3C000',
					}}
				>
					<Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>SIGN IN</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	circle: {
		width: 150,
		height: 150,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 15,
	},
	row: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttongroup: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
})
