import { useState, useEffect } from 'react'
import { router } from 'expo-router'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'

import { useSession } from '../ctx';
import styles from '@/style/style';

// Sign in page
export default function SignIn() {
  const { signin } = useSession();

	const login = async () => {
		try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access the app', // Message shown to the user
        fallbackLabel: 'Enter PIN', // Label for the fallback option (device passcode)
        disableDeviceFallback: false, // Allow fallback to passcode if biometrics aren't available
      });

      if (result.success) {
				signin()
				router.replace('./home')
      } else {
        Alert.alert('Failed', 'Authentication failed!');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during authentication');
    }
	}

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
			<View style={{marginBottom: 30}}>
				<Text style={{ fontSize: 50, fontWeight: '300', textAlign: 'center' }}>to-do <Text style={{ color: '#8FBCE6'}}>app</Text></Text>
			</View>
			{/* <TextInput style={error ? styles.textInputDanger : styles.textInput} onChangeText={(e) => setPassword(e)} value={password} placeholder='Enter Password' secureTextEntry={true} autoCapitalize='none' /> */}
			<TouchableOpacity
				onPress={() => login()}
				style={styles.buttonPrimary}
			>
				<Text style={styles.textButtonPrimary}>
					AUTHENTICATE
				</Text>
			</TouchableOpacity>
			{/* <Text style={{textAlign: 'center'}}>Do not have account yet? <Text onPress={() => router.replace('./register')} style={{color: '#8FBCE6', fontWeight: '500'}}>Signup here</Text></Text> */}
    </View>
  )
}
