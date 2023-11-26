

export const TodoEdit = ({ handleForm, id, inputRef, onInputChange }) => {
    return (
        <form 
            onSubmit  = {(e) => handleForm(e, id)} 
            className = "d-flex justify-content-between col-12"
        >
        <input
            className = "form-control"
            type      = "text"
            name      = "edit"
            id        = "edited"
            onChange  = { onInputChange }
            ref       = { inputRef }
        />
        <button
            type      = "submit"
            className = "btn btn-primary col-4"
        >
            Update
        </button>
    </form>
    )
}
