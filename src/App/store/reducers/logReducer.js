const initialState = {
    actions: []
}

const reducer = (state = initialState, action) => {
    state.actions.push({...action, date: new Date()});
    return state;
}

export default reducer;