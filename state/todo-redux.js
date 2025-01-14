import { createSlice } from "@reduxjs/toolkit"

// Inital Redux State
const initialValue = {
	data: []
}

export const todoSlice = createSlice({
	name: 'todoList',
	initialState: initialValue,
	reducers: {
		insertList: (state, action) => {
			// Use Splice in order to ensure new task will always appear on the top of the list
			state.data.splice(0,0,{...action.payload, isDone: false})
		},
		updateList: (state, action) => {
			console.log('🚀 ~ action:', action)
			state.data[action.payload.index] = action.payload.data
		},
		deleteList: (state, action) => {
			state.data.splice(action.payload.index, 1)
		}
	}
})

// Action creators are generated for each case reducer function
export const { insertList, updateList, deleteList } = todoSlice.actions

export const todoListData = (state) => state.data

export default todoSlice.reducer