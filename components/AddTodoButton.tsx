import { View, Text, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../style/style'
import { useDispatch } from 'react-redux';

import { insertList } from '../state/todo-redux'
import HalfModal from './HalfModal';

const AddListModalContent: React.FC<{closeModal: () => void}> = ({ closeModal }) => {
	const [desc, setDesc] = useState('')

	const dispatch = useDispatch()

	const saveList = () => {
		const tempData = {
			description: desc
		}
		dispatch(insertList(tempData))
		closeModal()
	}

	return (
		<HalfModal closeModal={closeModal}>
			{/* Modal Header */}
			<View style={{backgroundColor: 'white', padding: 10}}>
				<View style={{flexDirection: 'row', padding: 10}}>
					<TouchableOpacity onPress={() => closeModal()}>
						<Entypo name="chevron-left" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<Text style={styles.titleText}>Add New Task</Text>
				<View style={{marginVertical: 20}}>
					<TextInput style={styles.multilineTextInput} placeholder='Add a description' multiline={true} numberOfLines={4} value={desc} onChangeText={setDesc} />
				</View>
				<TouchableOpacity onPress={() => saveList()} style={styles.buttonPrimary}>
					<Text style={styles.textButtonPrimary}>DONE</Text>
				</TouchableOpacity>
			</View>
		</HalfModal>
	)
}

export default function AddTodoButton() {
	const [modalVisible, setModalVisible] = useState(false)

  return (
		<>
			<TouchableOpacity
				onPress={() => {
					setModalVisible(true)
				}}
				style={styles.buttonPrimary}
			>
				<Text style={styles.textButtonPrimary}>
					ADD NEW TASK +
				</Text>
			</TouchableOpacity>
			<Modal
				transparent={true}
				animationType="fade"
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}>
				<AddListModalContent closeModal={() => setModalVisible(false)} />
			</Modal>
		</>
  )
}