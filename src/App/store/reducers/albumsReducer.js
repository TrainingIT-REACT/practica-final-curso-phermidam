import { getAlbums } from "../actions/albums";
import { getAlbumById } from "../actions/albums";
import { getSongsByAlbum } from "../actions/albums";

const initialState = {
    isLoading: false,
    error: false,
    albums: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case String(getAlbums.pending) | String(getAlbumById.pending) | String(getSongsByAlbum.pending) : return {
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
        case String(getAlbumById.fulfilled): return {
            ...state,
            isLoading: false,
            error: false,
            album: action.payload
        }
        case String(getSongsByAlbum.fulfilled): return {
            ...state,
            isLoading: false,
            error: false,
            songs: action.payload
        }
        case String(getAlbums.rejected) | String(getAlbumById.rejected) | String(getSongsByAlbum.rejected) : return {
            ...state,
            isLoading: false,
            error: true
        }
        default: return state;
    }
}

export default reducer;