import React, {useState} from 'react';
import {AiFillHeart} from "react-icons/ai";
import {addToFavorite, deleteFromFavorite} from "../../../redux/actions/actionCreators";
import {useDispatch} from "react-redux";

const AddToFavorite = ({product}) => {
    const IsLikedProduct = JSON.parse(localStorage.getItem('favorite')) || []
    const foundProduct = IsLikedProduct.find(el => el.id === product.id)
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState(foundProduct ? foundProduct.isLiked || false : false)
    const fillBtn = () => {
        if (isLiked) {
            setIsLiked(false)
            return dispatch(deleteFromFavorite(product.id))
        } else {
            setIsLiked(true)
            return dispatch(addToFavorite(product))
        }
    }
    return (<>
        <button
            className="add-favorite"
            onClick={() => fillBtn()}>
            <AiFillHeart
                className="add-favorite__ic"
                style={isLiked ? {color: 'red'} : {color: ''}}
            />
        </button>
    </>);
};

export default AddToFavorite;