import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { useSession } from '@/ctx'
import styles from '@/style/style'

// Register new account. (Will be updated with new logic to register and forgot password in the future)
export default function register() {
	const [pass, setPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const [error, setError] = useState(false)
	const {register} = useSession()

	// Function to easily let user notice if confirm password is a mismatch with password
	const contValidPass = (e: string) => {
		setConfirmPass(e)
		if (e !== pass) setError(true)
		else setError(false)
	}

	// Register user function to save password for future login
	const userRegister = () => {
		if (!error && confirmPass !== '') {
			register(pass)
			router.replace('/')
		}
	}

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
			<View style={{ marginBottom: 30 }}>
				<Text style={{ fontSize: 40, fontWeight: '300' }}>register</Text>
			</View>
      <TextInput style={error ? styles.textInputDanger : styles.textInput} onChangeText={setPass} value={pass} placeholder='Password' secureTextEntry={true} autoCapitalize='none' />
			<TextInput style={error ? styles.textInputDanger : styles.textInput} onChangeText={contValidPass} value={confirmPass} placeholder='Confirm Password' secureTextEntry={true} autoCapitalize='none' />
			<TouchableOpacity
				onPress={() => {
					userRegister()
				}}
				style={{ backgroundColor: '#8FBCE6', borderRadius: 10, padding: 15, marginVertical: 10}}
			>
				<Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: '900'}}>
					SIGNUP
				</Text>
			</TouchableOpacity>
			<Text style={{textAlign: 'center'}}>Already have account? <Text onPress={() => router.replace('./sign-in')} style={{color: '#8FBCE6', fontWeight: '500'}}>Login here</Text></Text>
    </View>
  )
}