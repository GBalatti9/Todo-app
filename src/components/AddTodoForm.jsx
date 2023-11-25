import { useState } from "react"


export const AddTodoForm = () => {

    const [value, setValue] = useState('');

    const handleInput = ({ target }) => {

        let inputValue = target.value;

        setValue( inputValue );

    }

    const handleForm = (e) => {

        e.preventDefault();
        console.log({ value });
        setValue('')

    }

    return (
        <form action="" onSubmit={ handleForm }>
            <input
                type="text"
                placeholder="New task"
                value={ value }
                onChange={ handleInput }/>
            <button
                type="button"
                className="btn btn-outline-primary">
                Add
            </button>
        </form>
    )
}
