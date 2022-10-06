import {
    CONVERT_CURRENCY,
    GET_PRODUCTS,
    GET_SINGLE_PRODUCT
} from "../actions/actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
    defaultRate: '$',
    currencies: {
        "$": 1,
        "Som": 83.05,
        "Rub": 57.82,
    },
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload}

        case GET_SINGLE_PRODUCT: {
            return {...state, singleProduct: {...action.payload}}
        }

        case CONVERT_CURRENCY: {
            return {...state, defaultRate: action.payload}
        }

        default: {
            return state
        }
    }
}