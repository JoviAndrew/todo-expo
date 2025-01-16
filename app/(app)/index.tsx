import { FlatList, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux'

import MainHeader from '@/components/MainHeader';
import AddTodoButton from '@/components/AddTodoButton';

import { todoListData } from '../../state/todo-redux'
import TodoList from '@/components/TodoList';

export default function Index() {
	const todoData = useSelector(todoListData)

  return (
    <SafeAreaView style={{ flex: 1 }}>
			<MainHeader pageName='To Do List' />
			<View style={{ paddingHorizontal: 10}}>
				<AddTodoButton />
			</View>
			<FlatList
				data={todoData}
				renderItem={({item, index}) => (
					<TodoList data={item} index={index} />	
				)}
				keyExtractor={item => `to do list ${item.description}`}
			/>
    </SafeAreaView>
  )
}
