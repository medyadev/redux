import {
    ADD_TO_BASKET,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
} from "../actions/actionTypes";

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const findProduct = state.basket.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }


        case DELETE_FROM_BASKET: {
            const id = action.payload
            return {...state, basket: state.basket.filter(item => item.id !== id)}
        }

        case DECREASE_QUANTITY: {
            const findProduct = state.basket.find(el => el.id === action.payload)
            if (findProduct.quantity > 1) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload ?
                        {...el, quantity: el.quantity - 1} : el)
                }
            } else {
                return state
            }
        }
        default:
            return state
    }
};

