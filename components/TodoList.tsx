import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CheckBox } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import Entypo from '@expo/vector-icons/Entypo';
import styles from '@/style/style';

import { updateList, deleteList } from '../state/todo-redux'
import HalfModal from './HalfModal'


// Type props todo list
type Props = {
	data: {
		description: string,
		isDone: boolean
	},
	index: number
}

const TodoList: React.FC<Props> = ({data, index}) => {
	const [modalVisible, setModalVisible] = useState(false)
	const dispatch = useDispatch()

	const setToDone = () => {
		dispatch(updateList({index, data: {...data, isDone: !data.isDone}}))
	}

  return (
		<>
			<TouchableOpacity testID='todoTaskList' onPress={() => setModalVisible(true)}>
				<View style={localStyles.container}>
					<CheckBox
						testID='checkboxButton'
						checked={data.isDone}
						onPress={setToDone}
						containerStyle={localStyles.checkboxContainer}
					/>
					<Text testID='todoTaskDesc' style={[localStyles.description, data.isDone && localStyles.descriptionChecked]}>
						{data.description}
					</Text>
				</View>
			</TouchableOpacity>
			<Modal
				transparent={true}
				animationType="fade"
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<UpdateDeleteModal closeModal={() => setModalVisible(false)} selectedData={data} index={index} />			
			</Modal>
		</>
  )
}

type UpdateDelModalProps = {
	closeModal: () => void,
	selectedData: {
		description: string
	},
	index: number
}

const UpdateDeleteModal: React.FC<UpdateDelModalProps> = ({ closeModal, selectedData, index }) => {
	const [desc, setDesc] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		setDesc(selectedData.description)
	}, [selectedData])

	const deleteData = () => {
		const tempDataToDelete = {
			index
		}
		dispatch(deleteList(tempDataToDelete))
		closeModal()
	}

	const updateData = () => {
		const tempDataToUpdate = {
			data: {
				description: desc
			},
			index
		}
		dispatch(updateList(tempDataToUpdate))
		closeModal()
	}

	return (
		<HalfModal closeModal={() => closeModal()}>
			{/* Modal Header */}
			<View style={{backgroundColor: 'white', padding: 10}}>
				<View style={{flexDirection: 'row', padding: 10}}>
					<TouchableOpacity testID='closeModalButton' onPress={() => closeModal()}>
						<Entypo name="chevron-left" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<Text style={styles.titleText}>Task Description</Text>
				<View style={{marginVertical: 20}}>
					<TextInput testID='descriptionTextInput' style={styles.multilineTextInput} placeholder='Add a description' multiline={true} numberOfLines={4} value={desc} onChangeText={setDesc} />
				</View>
				<TouchableOpacity testID='editButton' onPress={() => updateData()} style={styles.buttonPrimary}>
					<Text style={styles.textButtonPrimary}>EDIT</Text>
				</TouchableOpacity>
				<TouchableOpacity testID='deleteButton' onPress={() => deleteData()} style={styles.buttonDanger}>
					<Text style={styles.textButtonPrimary}>DELETE</Text>
				</TouchableOpacity>
			</View>
		</HalfModal>
	)
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  checkboxContainer: {
    marginRight: 15, // Space between checkbox and description
    backgroundColor: 'transparent', // To make checkbox background invisible
  },
  description: {
    fontSize: 16,
    color: '#333',
    flex: 1, // Ensures the description takes up available space
  },
  descriptionChecked: {
    textDecorationLine: 'line-through', // Strikes through text when checked
    color: '#aaa', // Gray color for completed tasks
  },
})

export default TodoList