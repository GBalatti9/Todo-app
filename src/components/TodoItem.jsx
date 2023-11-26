import { useEffect, useRef, useState } from "react"
import { useForm } from "../hooks/useForm";

export const TodoItem = ({ item, onDeleteTodo, onToggle, onUpdate }) => {

    const [edit, setEdit] = useState(false);

    const { formState, onInputChange, onResetForm } = useForm({
        edit: ''
    }); 

    const handleToggleEdit = () => {
        setEdit(!edit)
    };
    
    const handleForm = (e, id) => {
        e.preventDefault();
        if((formState.edit).length <= 1) return;

        onUpdate(id, formState.edit);
        handleToggleEdit();
    }


    useEffect(() => {
        if (edit) {
            inputRef.current.focus();
        }
    }, [edit]);

    const inputRef = useRef();

    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div className="col-3 d-flex justify-content-around">
                    {
                        !edit ?
                            <>
                                <input
                                    type="checkbox"
                                    onChange={() => onToggle(item.id)}
                                    checked={item.done} />
                                <span
                                    onClick={() => onToggle(item.id)}
                                    className={`${item.done ? 'opacity-50 text-decoration-line-through' : ''}`}>{item.todo}
                                </span>
                            </>
                            :
                            <form action="" onSubmit={ (e) => handleForm( e, item.id ) }>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="edit"
                                    id="edited"
                                    onChange={ onInputChange }
                                    ref={ inputRef }
                                    />
                                <button 
                                    type="submit"
                                    className="btn btn-primary">
                                        Update
                                </button>
                            </form>
                    }
                </div>
                <div className="col-4 d-flex justify-content-around">
                    <button
                        className="btn btn-warning"
                        onClick={ handleToggleEdit }
                        >
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
