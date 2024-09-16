import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Man3 = () => {
	return (
		<LinearGradient style={styles.container} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}>
			<View style={[styles.row, { flex: 2 }]}>
				<Image source={require('@/assets/images/lock.png')} style={styles.image} />
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={styles.titleText}>FORGET{'\n'}PASSWORD</Text>
			</View>
			<View style={[styles.row, { flex: 1 }]}>
				<Text style={styles.subtitleText}>
					Provide your account’s email for which you want to reset your password
				</Text>
			</View>
			<View style={[styles.row, { flex: 0.4 }]}>
				<View
					style={{
						backgroundColor: '#C4C4C4',
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						height: 50,
						width: 300,
					}}
				>
					<Image source={require('@/assets/images/letter.png')} style={{}} />
					<TextInput
						style={styles.input}
						placeholderTextColor="#888"
						keyboardType="email-address"
						value="Email"
					/>
				</View>
			</View>
			<View style={[styles.row, { flex: 1 }, styles.buttongroup]}>
				<TouchableOpacity style={styles.button} onPress={() => Alert.alert('Login Pressed')}>
					<Text style={styles.buttonText}>TEXT</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	)
}

export default Man3

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
		width: 300,
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
	image: {
		width: 150,
		height: 150,
	},
	input: {
		padding: 10,
		fontSize: 16,
		color: 'black',
		backgroundColor: '#C4C4C4',
	},
})
