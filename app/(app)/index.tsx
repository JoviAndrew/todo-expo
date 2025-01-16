import { FlatList, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux'

import MainHeader from '@/components/MainHeader';
import AddTodoButton from '@/components/AddTodoButton';

import { todoListData } from '../../state/todo-redux'
import TodoList from '@/components/TodoList';

type TodoProps = {
	data: [{
		description: string,
		isDone: boolean
	}]
}

// Main page of the application
export default function Index() {
	// Get todo data from redux
	const todoData = useSelector((state: { todo: TodoProps }) => state.todo)

  return (
    <SafeAreaView style={{ flex: 1 }}>
			<MainHeader pageName='To Do List' />
			<View style={{ paddingHorizontal: 10}}>
				<AddTodoButton />
			</View>
			<FlatList
				data={todoData?.data || []}
				renderItem={({item, index}) => (
					<TodoList data={item} index={index} />	
				)}
				keyExtractor={item => `to do list ${item.description}`}
			/>
    </SafeAreaView>
  )
}
