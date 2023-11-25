import { useState } from "react"
import { useForm } from "../hooks/useForm";


export const AddTodoForm = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        todo: '',
    });

    const handleForm = (e) => {
        e.preventDefault();
        
        if((formState.todo).length <= 1) return;

        onNewTodo(formState.todo);
        onResetForm();
    }

    return (
        <form 
            onSubmit={ handleForm }
            className="containerT d-flex">
            <input
                type="text"
                placeholder="New task"
                className="form-control"
                name="todo"
                value={ formState.todo ? formState.todo : '' }
                onChange={ onInputChange }/>
            <button
                type="submit"
                className="btn btn-outline-primary col-3">
                Add
            </button>
        </form>
    )
}
