import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../helpers/todoReducer"

export const useTodo = () => {

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

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
