import React from 'react';
import {FaTimesCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteFromFavorite} from "../../../redux/actions/actionCreators";

const DeleteFromFavorite = ({product}) => {
    const dispatch = useDispatch()
    return (
        <>
            <button
                className='delete-favorite'
                onClick={() => dispatch(deleteFromFavorite(product.id))}
            >
                <FaTimesCircle
                    className="delete-favorite__icon"
                />
            </button>
        </>
    );
};

export default DeleteFromFavorite;