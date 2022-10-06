import React from 'react';
import {BsFillCartFill} from "react-icons/bs";
import {addToBasket} from "../../../redux/actions/actionCreators";
import {useDispatch} from "react-redux";

const AddToCart = ({product}) => {
    const dispatch = useDispatch()
    return (
        <>
            <button
                className="add-to-cart"
                onClick={() => dispatch(addToBasket(product))}
            >
                            <span>
                                Add to Basket
                                &nbsp;
                                <BsFillCartFill
                                    className="add-to-cart__icon"
                                />
                            </span>
            </button>
        </>
    );
};

export default AddToCart;