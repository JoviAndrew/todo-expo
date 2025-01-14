import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	buttonPrimary: {
		backgroundColor: '#8FBCE6',
		borderRadius: 10,
		padding: 15,
		marginVertical: 10
	},
	buttonDanger: {
		backgroundColor: '#E63946',
		borderRadius: 10,
		padding: 15,
		marginVertical: 10
	},
	textButtonPrimary: {
		color: 'white',
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '900'
	},
	titleText: {
		fontSize: 30,
		fontWeight: '300',
		textAlign: 'center'
	},
	textInput: {
		width: '100%',
		backgroundColor: 'white',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		textAlignVertical: 'top', // Ensures the text starts from the top
		fontSize: 16,
		shadowColor: '#000', // Optional for shadow effect
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3, // For Android shadow
		marginTop: 5
	},
	multilineTextInput: {
		width: '100%',
		minHeight: 100, // Minimum height for the input box
		backgroundColor: 'white',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		textAlignVertical: 'top', // Ensures the text starts from the top
		fontSize: 16,
		shadowColor: '#000', // Optional for shadow effect
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3 // For Android shadow
	}
})

export default styles