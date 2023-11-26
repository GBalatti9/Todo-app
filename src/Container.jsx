import { AddTodoForm } from './components';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

export const Container = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, handleUpdateTodo } = useTodo();

    return (
        <div 
            className='bg-primary p-4'
            style={{height: '100vh'}} 
            >
                

                <div className='card col-12 col-sm-6 col-md-4 shadow p-2 m-auto'>
                    <h3 className='text-center'>Add Todo</h3>
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
