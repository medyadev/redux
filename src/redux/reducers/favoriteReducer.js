import {
    ADD_TO_FAVORITE,
    DELETE_FROM_FAVORITE
} from "../actions/actionTypes";

const initialState = {
    favorite: JSON.parse(localStorage.getItem('favorite')) || [],
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            return {...state, favorite: [...state.favorite, action.payload]}
        }

        case DELETE_FROM_FAVORITE: {
            return {...state, favorite: state.favorite.filter(el => el.id !== action.payload)}
        }

        default:
            return state
    }
}