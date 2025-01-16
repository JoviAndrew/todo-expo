import React from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSession } from '@/ctx'

export default function HeaderButtonMenu() {
	const { signOut } = useSession()

	const onPressSignout = () => {
		Alert.alert('You are about to Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => signOut()},
    ]);
	}

  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => onPressSignout()}>
				<MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}