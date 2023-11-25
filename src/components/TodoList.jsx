
export const TodoList = ({ items }) => {
    return (
        <ul>
            {
                items.map((item, i) => (
                    <p key={item + i}>{item.todo}</p>
                ))
            }
        </ul>
    )
}
