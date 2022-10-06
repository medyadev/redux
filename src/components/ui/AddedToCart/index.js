import React from 'react';
import {NavLink} from "react-router-dom";
import {BsBagCheck} from "react-icons/bs";

const AddedToCard = () => {
    return (
        <>
            <NavLink to={'/basket'}>
                <button
                    className="added-to-cart"
                >
                    Go to Basket
                    &nbsp;
                    <BsBagCheck
                        className="add-to-cart__icon"
                    />
                </button>
            </NavLink>
        </>
    );
};

export default AddedToCard;