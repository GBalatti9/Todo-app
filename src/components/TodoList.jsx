import { useState } from "react"
import { TodoItem } from "./TodoItem"
import { Menu } from "./Menu";
import { useFilter } from "../hooks/useFilter";

export const TodoList = ({ items, onDeleteTodo, onToggle, onUpdate }) => {

    const { setFilter, showPendings, showDone, filterItems } = useFilter(items);

    return (
        <>
            <Menu 
                showDone     = { showDone }
                setFilter    = { setFilter } 
                showPendings = { showPendings } 
            />
            <ul className="list-group">
                {
                    filterItems().map((item, i) => (
                        <TodoItem 
                        item         = { item } 
                        key          = { item + i } 
                        onDeleteTodo = { onDeleteTodo } 
                        onToggle     = { onToggle }
                        onUpdate     = { onUpdate }
                        />
                        ))
                }
            </ul>
        </>
    )
}
