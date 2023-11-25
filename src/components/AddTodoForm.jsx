import { useState } from "react"
import { useForm } from "../hooks/useForm";


export const AddTodoForm = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        todo: '',
    });

    const handleForm = (e) => {
        e.preventDefault();
        console.log(formState.todo);
        onResetForm();
    }

    return (
        <form onSubmit={ handleForm }>
            <input
                type="text"
                placeholder="New task"
                className="form-control"
                name="todo"
                value={ formState.todo ? formState.todo : '' }
                onChange={ onInputChange }/>
            <button
                type="button"
                className="btn btn-outline-primary">
                Add
            </button>
        </form>
    )
}
