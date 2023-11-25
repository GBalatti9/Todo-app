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

    return (
        <div className='card'>
            <AddTodoForm />
            <TodoList items={ todos }/>
        </div>
    )
}
