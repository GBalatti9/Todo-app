import { useReducer } from 'react';
import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Buy bread',
        done: false,
    }
]

const todoReducer = () => {

}

export const Container = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    return (
        <div className='card'>
            <AddTodoForm />
            <TodoList items={ todos }/>
        </div>
    )
}
