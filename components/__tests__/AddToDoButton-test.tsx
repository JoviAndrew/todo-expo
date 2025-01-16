import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native'
import AddTodoButton from '../AddTodoButton'
import { Provider, useDispatch } from 'react-redux'
import MockStore from '../../state/mockstore'
import { insertList } from '../../state/todo-redux'

// Mock the dispatch function
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

jest.mock('expo-font')

describe('AddToDoButton Component UI', () => {
  it('opens modal when ADD NEW TASK + button is pressed', async() => {
      render(<AddTodoButton />);

      const addButton = screen.getByTestId('addNewTaskButton');
      fireEvent.press(addButton);
  
      await waitFor(() => {
        // Check if modal is visible after button press
        expect(screen.getByTestId('addNewTaskLabel')).toBeVisible()
      })
  });

  it('closes modal when back button is pressed', async() => {
    render(<AddTodoButton />);

    const addButton = screen.getByTestId('addNewTaskButton');
    fireEvent.press(addButton);

    await waitFor(() => {
      // Check modal visibility
      expect(screen.getByTestId('addNewTaskLabel')).toBeOnTheScreen()
    })
    const closeButton = screen.getByTestId('closeModalButton');
    fireEvent.press(closeButton);

    // Check if modal is closed
    expect(screen.queryByText('Add New Task')).toBeNull();
  });

  it('adds description when typing in textInput', async() => {
    render(<AddTodoButton />);

    const addButton = screen.getByTestId('addNewTaskButton');
    fireEvent.press(addButton);

    await waitFor(() => {
      // Check modal visibility
      expect(screen.getByTestId('addNewTaskLabel')).toBeOnTheScreen()
    })
    // Get text input
    const input = screen.getByTestId('descriptionTextInput')
  
    // Insert text to text input
    fireEvent.changeText(input, 'Buy Eggs')
  
    // Check if text has been inserted
    expect(input.props.value).toBe('Buy Eggs')
  });
});

describe('AddToDoButton Component with Redux', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    // Reset the mock before each test
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  it('adds task to redux after pressing submit button', async() => {
    render(
      <Provider store={MockStore}>
        <AddTodoButton />
      </Provider>
    )

    const addButton = screen.getByTestId('addNewTaskButton');
    fireEvent.press(addButton);

    await waitFor(() => {
      // Check modal visibility
      expect(screen.getByTestId('addNewTaskLabel')).toBeOnTheScreen()  
    })
    
    // Get text input and insert string
    const input = screen.getByTestId('descriptionTextInput')
    fireEvent.changeText(input, 'Buy Eggs')

    // Get submit button and press
    const submitButton = screen.getByTestId('doneButton')
    fireEvent.press(submitButton)

    // Assert that dispatch was called with the correct action
    expect(dispatch).toHaveBeenCalledWith(insertList({ description: 'Buy Eggs' }));
  });
})
