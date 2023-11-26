
export const TodoItem = ({ item, onDeleteTodo, onToggle }) => {
    console.log({ item });
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div className="col-3 d-flex justify-content-around">
                    <input 
                        type="checkbox" 
                        onChange={() => onToggle(item.id)}
                        checked={ item.done }/>
                    <span
                        onClick={() => onToggle(item.id)}
                        className={`${item.done ? 'opacity-50 text-decoration-line-through' : ''}`}>{item.todo}</span>
                </div>
                <div className="col-4 d-flex justify-content-around">
                    <button
                        className="btn btn-warning">
                        <img src="../../baseline_edit_black_24dp.png" alt="Edit" /></button>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDeleteTodo(item.id)}>
                        <img src="../../baseline_delete_black_24dp.png" alt="Delete" /></button>
                </div>
            </li>
        </>
    )
}
