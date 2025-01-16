import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useSession } from '../ctx';
import styles from '@/style/style';

// Sign in page
export default function SignIn() {
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
  const { signin, password: storedPass } = useSession();

	const login = () => {
		// Validate login process. If password is the same as the one stored in encrypt data
		if (storedPass === password) {
			setError(false)
			signin()
			router.replace('/')
		} else {
			setError(true)
		}
	}

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
			<View style={{marginBottom: 30}}>
				<Text style={{ fontSize: 50, fontWeight: '300', textAlign: 'center' }}>to-do <Text style={{ color: '#8FBCE6'}}>app</Text></Text>
			</View>
			<TextInput style={error ? styles.textInputDanger : styles.textInput} onChangeText={(e) => setPassword(e)} value={password} placeholder='Enter Password' secureTextEntry={true} autoCapitalize='none' />
			<TouchableOpacity
				onPress={() => login()}
				style={styles.buttonPrimary}
			>
				<Text style={styles.textButtonPrimary}>
					LOGIN
				</Text>
			</TouchableOpacity>
			<Text style={{textAlign: 'center'}}>Do not have account yet? <Text onPress={() => router.replace('./register')} style={{color: '#8FBCE6', fontWeight: '500'}}>Signup here</Text></Text>
    </View>
  )
}
