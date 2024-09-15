import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Man2 = () => {
	return (
		<LinearGradient style={styles.container} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}>
			<View style={[styles.row, { flex: 2 }]}>
				<View style={styles.circle}></View>
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={styles.titleText}>GROW{'\n'}YOUR BUSINESS</Text>
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={styles.subtitleText}>
					We will help you to grow your business using online server
				</Text>
			</View>
			<View style={[styles.row, { flex: 1 }, styles.buttongroup]}>
				<TouchableOpacity style={styles.button} onPress={() => Alert.alert('Login Pressed')}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sign In Pressed')}>
					<Text style={styles.buttonText}>SIGN IN</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.row, { flex: 0.5 }]}>
				<Text style={[styles.titleText, { fontSize: 20 }]}> HOW WE WORK</Text>
			</View>
		</LinearGradient>
	)
}

export default Man2

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
	button: {
		width: 100,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E3C000',
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	titleText: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subtitleText: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})
