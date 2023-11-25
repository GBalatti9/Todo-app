

export const todoReducer = ( todos, action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...todos, action.payload ];
            break;
    
        default:
            break;
    }
}
