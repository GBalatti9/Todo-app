
export const TodoItem = ({ item, onDeleteTodo }) => {
    console.log({item});
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                {item.todo}
                <div>
                <button 
                    className="btn btn-warning">
                        <img src="../../baseline_edit_black_24dp.png" alt="Edit" /></button>
                <button 
                    className="btn btn-danger"
                    onClick={ () => onDeleteTodo( item.id ) }>
                        <img src="../../baseline_delete_black_24dp.png" alt="Delete" /></button>
                </div>
            </li>
        </>
    )
}
