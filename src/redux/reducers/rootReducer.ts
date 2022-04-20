import { combineReducers } from "redux";
import todosReducer from "./todosReducer";


const rootReducer = combineReducers({
    dataTodos: todosReducer
});

export default rootReducer;