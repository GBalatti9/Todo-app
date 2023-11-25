
export const TodoItem = ({ item }) => {
    console.log({item});
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                {item.todo}
                <div>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Delete</button>
                </div>
            </li>
        </>
    )
}
