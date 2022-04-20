import {TODOS} from '../actions/actions'

const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action: any) => {
    switch(action.type){
        case TODOS:
            return {...state, todos: action.payload};
        default:
            return state;    
    }
}

export default todosReducer;