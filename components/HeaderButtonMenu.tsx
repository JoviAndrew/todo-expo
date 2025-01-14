import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { router } from 'expo-router';

import Entypo from '@expo/vector-icons/Entypo';
import { useSession } from '@/ctx';

const HeaderMenu: React.FC = () => {
	const { signOut } = useSession()
	return (
		<View style={{}}>
			{/* <TouchableOpacity><Text>Change Passkey</Text></TouchableOpacity> */}
			<TouchableOpacity onPress={() => signOut()}><Text>Sign Out</Text></TouchableOpacity>
		</View>
	)
}

export default function HeaderButtonMenu() {
	const [showMenu, setShowMenu] = useState(false)
  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </TouchableOpacity>
			{showMenu
			? <HeaderMenu />
			: null
			}
    </View>
  )
}