import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

export const Container = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, handleUpdateTodo } = useTodo();

    return (
        <div className='bg-primary d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
                <div className='card bg-white col-4 p-4'>
                    <AddTodoForm
                        onNewTodo = { handleNewTodo }
                        />
                        {
                            todos.length > 0 ?
                            <TodoList
                                items        = { todos }
                                onDeleteTodo = { handleDeleteTodo }
                                onToggle     = { handleToggleTodo }
                                onUpdate     = { handleUpdateTodo }/>
                            : ''
                        }
                </div>
        </div>
    )
}
