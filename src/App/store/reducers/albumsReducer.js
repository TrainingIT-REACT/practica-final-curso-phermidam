import { getAlbums } from "../actions/albums";

const initialState = {
    isLoading: false,
    error: false,
    albums: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case String(getAlbums.pending): return {
            ...state,
            isLoading: true,
            error: false
        };
        case String(getAlbums.fulfilled): return {
            ...state,
            isLoading: false,
            error: false,
            albums: action.payload
        }
        case String(getAlbums.rejected): return {
            ...state,
            isLoading: false,
            error: true
        }
        default: return state;
    }
}

export default reducer;