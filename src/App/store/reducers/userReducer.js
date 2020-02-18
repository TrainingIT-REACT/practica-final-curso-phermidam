import types from "../actions/types";

const initialState = {
    name: "Pablo Hermida Mourelle",
    username: "",
    isSignIn: false,
    history: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN:
            state.username=action.username;
            state.isSignIn=true;
            return state;
        case types.LOGOUT:
            state.isSignIn=false;
            return state;
        case types.ADD_TO_HISTORY:
            let history=state.history;
            let exist=-1;
            history.forEach((value, i)=> {
                if(value.id===action.song.id){
                    exist=i;
                    return;
                }
            });
            if(exist<0){
                history=[action.song, ...history];
            }else{
                history=[
                    action.song,
                    ...history.slice(0, exist),
                    ...history.slice(exist+1)
                ]
            }
            return {
                ...state,
                history: history
            }
        default:
            return state;
    }
}

export default reducer;