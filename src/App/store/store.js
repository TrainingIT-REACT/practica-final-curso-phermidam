import { createStore, combineReducers } from "redux";

//Reducers
import user from './reducers/userReducer';

const store = createStore( 
    combineReducers({
        user
    }) 
);

export default store;