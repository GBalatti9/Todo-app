import { useEffect, useRef, useState } from "react"
import { useForm } from "../hooks/useForm";
import { TodoView } from "./TodoView";
import { TodoEdit } from "./TodoEdit";

export const TodoItem = ({ item, onDeleteTodo, onToggle, onUpdate }) => {

    const [ edit, setEdit ] = useState(false);

    const { formState, onInputChange } = useForm({
        edit: ''
    });

    const handleToggleEdit = () => {
        setEdit( !edit )
    };

    const handleFormUpdate = ( e, id, onUpdate ) => {
        e.preventDefault();
        if ( (formState.edit).length <= 1 ) return;

        onUpdate( id, formState.edit );
        handleToggleEdit();
    }

    useEffect(() => {
        if ( edit ) {
            inputRef.current.focus();
        }
    }, [ edit ]);

    const inputRef = useRef();

    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center col-12 justify-content-between">
                    {
                        !edit ?
                            <TodoView 
                                item             = { item }
                                onToggle         = { onToggle }
                                onDeleteTodo     = { onDeleteTodo }
                                handleToggleEdit = { handleToggleEdit } 
                            />
                            :
                            <TodoEdit 
                                id                  = { item.id }
                                inputRef            = { inputRef }
                                onInputChange       = { onInputChange }
                                handleFormUpdate    = { handleFormUpdate }
                            />
                    }
                </div>
            </li>
        </>
    )
}
