import types from "../actions/types";

const initialState = {
    name: "Pablo Hermida Mourelle",
    username: "",
    isSignIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN:
            state.username=action.username;
            state.signIn=true;
            return state;
        case types.LOGOUT:
            return state;
        default:
            return state;
    }
}

export default reducer;