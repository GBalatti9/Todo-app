

export const TodoView = ({ item, onToggle, onDeleteTodo, handleToggleEdit }) => {
    return (
        <>
            <div 
                className = "d-flex justify-content-around text-align-center"
            >
            <input
                type     = "checkbox"
                onChange = { () => onToggle( item.id ) }
                checked  = { item.done } />
            <span
                onClick   = { () => onToggle( item.id ) }
                className = { `${ item.done ? 'opacity-50 text-decoration-line-through' : '' } cursor-pointer p-1` }>
                    { item.todo }
            </span>
            </div>
            <div 
                className = "col-4 d-flex justify-content-around"
            >
            <button
                className = "btn btn-warning"
                onClick   = { handleToggleEdit }
            >
                <img src = "../../docs/baseline_edit_black_24dp.png" alt = "Edit" />
            </button>
            <button
                className = "btn btn-danger"
                onClick   = { () => onDeleteTodo( item.id ) }>
                <img src  = "../../docs/baseline_delete_black_24dp.png" alt = "Delete" />
            </button>
            </div>
    </>
    )
}
