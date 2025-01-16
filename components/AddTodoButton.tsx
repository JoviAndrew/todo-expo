import { View, Text, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../style/style'
import { useDispatch } from 'react-redux';

import { insertList } from '../state/todo-redux'
import HalfModal from './HalfModal';

// Modal content component filled with form for user to fill task description
const AddListModalContent: React.FC<{closeModal: () => void}> = ({ closeModal }) => {
	const [desc, setDesc] = useState('')

	const dispatch = useDispatch()

	// Function to trigger redux action to save task to redux
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
					<TouchableOpacity testID='closeModalButton' onPress={() => closeModal()}>
						<Entypo name="chevron-left" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<Text testID='addNewTaskLabel' style={styles.titleText}>Add New Task</Text>
				<View style={{marginVertical: 20}}>
					<TextInput testID='descriptionTextInput' style={styles.multilineTextInput} placeholder='Add a description' multiline={true} numberOfLines={4} value={desc} onChangeText={setDesc} />
				</View>
				<TouchableOpacity testID='doneButton' onPress={() => saveList()} style={styles.buttonPrimary}>
					<Text style={styles.textButtonPrimary}>DONE</Text>
				</TouchableOpacity>
			</View>
		</HalfModal>
	)
}

// Add new task button
const AddTodoButton: React.FC<any> = () => {
	const [modalVisible, setModalVisible] = useState(false)

  return (
		<>
			<TouchableOpacity
				testID='addNewTaskButton'
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

export default AddTodoButton