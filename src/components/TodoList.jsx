import { TodoItem } from "./TodoItem"

export const TodoList = ({ items }) => {
    return (
        <ul>
            {
                items.map((item, i) => (
                    <TodoItem item={item} key={item + i}/>
                ))
            }
        </ul>
    )
}
