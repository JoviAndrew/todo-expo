import React from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSession } from '@/ctx'

// Signout button (Previously wanted to make a 3 vertical dot menu, but since it is only for sign out so the old idea has been tossed out.)
export default function HeaderButtonMenu() {
	const { signOut } = useSession()

  // Alert notifying users to sign out or not
	const onPressSignout = () => {
		Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel'
      },
      {text: 'Yes', onPress: () => signOut()},
    ]);
	}

  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => onPressSignout()}>
				<MaterialCommunityIcons name="exit-to-app" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}