import {
    GET_PRODUCTS,
    ADD_TO_BASKET,
    ADD_TO_FAVORITE,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    DELETE_FROM_FAVORITE,
    CONVERT_CURRENCY,
    GET_SINGLE_PRODUCT,
} from "./actionTypes";

export const getProducts = () => {
    return (dispatch) => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(data => {
                dispatch({type: GET_PRODUCTS, payload: data})
            })
    }
}

export const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    const findProduct = basket.find(el => el.id === product.id)
    if (findProduct) {
        basket = basket.map(el => {
            if (el.id === product.id) {
                el.quantity++
                return el
            } else {
                return el
            }
        })
    } else {
        basket = [...basket, {...product, quantity: 1}]
    }
    localStorage.setItem('basket', JSON.stringify((basket)))
    return {type: ADD_TO_BASKET, payload: product}
}

export const addToFavorite = (product) => {
    let favorite = JSON.parse(localStorage.getItem('favorite')) || []
    product.isLiked = true
    favorite = [...favorite, product]
    localStorage.setItem('favorite', JSON.stringify((favorite)))
    return {type: ADD_TO_FAVORITE, payload: product}
}

export const deleteFromFavorite = (id) => {
    let favorite = JSON.parse(localStorage.getItem('favorite')) || []
    favorite = favorite.filter(el => el.id !== id)
    localStorage.setItem('favorite', JSON.stringify((favorite)))
    return {type: DELETE_FROM_FAVORITE, payload: id}
}

export const deleteFromBasket = (id) => {
    const basket = JSON.parse(localStorage.getItem('basket'))
    const updateBasket = basket.filter(el => el.id !== id)
    localStorage.setItem('basket', JSON.stringify(updateBasket))
    return {type: DELETE_FROM_BASKET, payload: id}
}

export const decreaseQty = (id) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    const findProduct = basket.find(el => el.id === id)
    if (findProduct.quantity > 1) {
        basket = basket.map(el => {
            if (el.id === id) {
                return {...el, quantity: el.quantity - 1}
            } else {
                return el
            }
        })
    }
    localStorage.setItem('basket', JSON.stringify((basket)))
    return {type: DECREASE_QUANTITY, payload: id}
}

export const convertCurrency = (value) => {
    return ({type: CONVERT_CURRENCY, payload: value})
}

export const getSingleProduct = (id) => {
    return function (dispatch) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((data) => data.json())
            .then((result) => dispatch({type: GET_SINGLE_PRODUCT, payload: result}))
    }
}