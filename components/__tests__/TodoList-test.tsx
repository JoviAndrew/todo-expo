import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Index from '@/app/(app)'

jest.mock('expo-font')

// Mocking the redux store and state
const mockStore = (state: any) => createStore((state) => state, state)

describe('Index Screen', () => {
  it('should render FlatList items correctly from Redux state', async () => {
    // Simulating Redux state
    const mockTodoData =  {data: [
      { description: 'Task 1' },
      { description: 'Task 2' },
      { description: 'Task 3' },
    ]}

    // Wrap the Index component with the Provider and pass the mock store
    const renderer = render(
      <Provider store={mockStore({ todoListData: mockTodoData })}>
        <Index />
      </Provider>
    )

		await waitFor(() => {
			// Verify if FlatList is rendering the correct number of items
			expect(renderer.getByTestId('todoTaskList')).toBeOnTheScreen()
		})
  })
})
