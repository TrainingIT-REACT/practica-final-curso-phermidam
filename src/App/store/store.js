import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

//Reducers
import user from './reducers/userReducer';
import albums from './reducers/albumsReducer';

const store = createStore( 
    combineReducers({
        user,
        albums
    }),
    applyMiddleware(promise) 
);

export default store;