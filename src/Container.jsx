import { useReducer } from 'react';
import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';
import { todoReducer } from './helpers/todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Buy bread',
        done: false,
    }
]


export const Container = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( newTodo ) => {

        const newItem = {
            id: new Date().getTime(),
            todo: newTodo,
            done: false
        }

        dispatch({
            type: '[TODO] Add Todo',
            payload: newItem,
        })
    }

    return (
        <div className='card'>
            <AddTodoForm onNewTodo={ handleNewTodo }/>
            <TodoList items={ todos }/>
        </div>
    )
}
