import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode,
    closeModal: () => void
}

// Custome modal component that will allow users to close the modal when they press the backdrop
const HalfModal: React.FC<Props> = ({children, closeModal}) => {
  return (
    <TouchableWithoutFeedback onPress={() => closeModal()}>
			<View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)'}}>
				<TouchableWithoutFeedback>
						{children}
				</TouchableWithoutFeedback>
			</View>
    </TouchableWithoutFeedback>
  )
}

export default HalfModal