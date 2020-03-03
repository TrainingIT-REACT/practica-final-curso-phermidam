import {addToLog} from "../actions/log";

const logger = (store) => (next) => (action) => {
    addToLog(action);
    const result = next(action);
    return result;
};

export default logger;