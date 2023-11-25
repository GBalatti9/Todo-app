import { TodoItem } from "./TodoItem"

export const TodoList = ({ items }) => {
    return (
        <ul className="list-group">
            {
                items.map((item, i) => (
                    <TodoItem item={item} key={item + i}/>
                ))
            }
        </ul>
    )
}
