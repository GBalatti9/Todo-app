import { useEffect, useReducer } from 'react';
import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';
import { todoReducer } from './helpers/todoReducer';

const ACTIONS = {
    ADD_TODO: '[TODO] Add Todo',
}

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Buy bread',
        done: false,
    }
]

const init = (initialState) => {
    const storageData = localStorage.getItem('todos');
    const initialData = storageData ? JSON.parse( storageData ) : initialState;
    return initialData;
}

export const Container = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (newTodo) => {

        const newItem = {
            id: new Date().getTime(),
            todo: newTodo,
            done: false
        }

        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: newItem,
        })
    }

    return (
        <div className='card'>
            <AddTodoForm onNewTodo={handleNewTodo} />
            <TodoList items={todos} />
        </div>
    )
}
