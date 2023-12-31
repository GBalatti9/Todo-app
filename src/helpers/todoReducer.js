

export const todoReducer = ( todos, action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...todos, action.payload ];
            break;
    
        case '[TODO] Delete Todo':
            return todos.filter( todo => todo.id !== action.payload );
            break;

        case '[TODO] Toggle Todo':
            return todos.map(todo => {

                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            });

        case '[TODO] Update Todo':
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        todo: action.payload.newValue, 
                    }
                }

                return todo;
            });

        default:
            break;
    }
}
