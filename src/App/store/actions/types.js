const actions = [
    "LOGIN",
    "LOGOUT",
    "ADD_TO_HISTORY"
];

const actionTypes = {};
    actions.forEach(action => {
    actionTypes[action] = action;
});

export default actionTypes;