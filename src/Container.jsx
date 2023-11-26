import { useEffect, useReducer } from 'react';
import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';
import { todoReducer } from './helpers/todoReducer';

const ACTIONS = {
    ADD_TODO: '[TODO] Add Todo',
    DELETE_TODO: '[TODO] Delete Todo',
    TOGGLE_TODO: '[TODO] Toggle Todo',
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
    const initialData = storageData ? JSON.parse(storageData) : initialState;
    return initialData;
}

export const Container = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

    const handleDeleteTodo = (id) => {

        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: id,
        });

    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: id,
        })

    }

    return (
        <div className='bg-primary d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
                <div className='card bg-white col-4 p-4'>
                    <AddTodoForm
                        onNewTodo={handleNewTodo}
                        />
                    <TodoList
                        items={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggle={handleToggleTodo} />
                </div>
        </div>
    )
}
