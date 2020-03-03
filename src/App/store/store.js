import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

//Reducers
import user from './reducers/userReducer';
import albums from './reducers/albumsReducer';
import log from './reducers/logReducer';

//Middlewares
import logger from './middlewares/logger';

const store = createStore( 
    combineReducers({
        user,
        albums,
        log
    }),
    applyMiddleware(logger, promise) 
);

export default store;