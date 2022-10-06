import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToCart from "../ui/AddToCart";
import AddToFavorite from "../ui/AddToFavorite";
import AddedToCart from "../ui/AddedToCart";
import {Link} from "react-router-dom";
// import {ADD_TO_BASKET, ADD_TO_FAVORITE, DELETE_FROM_FAVORITE} from "../../redux/actionTypes";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s.basket)
    const {currencies, defaultRate} = useSelector(s => s.catalog)
    let isAdded = basket.some(el => el.id === product.id)
    let productTitle = ''
    product.title.split(' ').slice(0, 2).map(el => productTitle += el)
    let resultPrice = product.price * currencies[defaultRate]
    useEffect(() => {

    }, [dispatch])
    return (
        <>
            <div className="products__cards__item">
                <Link to={`/product-detail/${product.id}`} className="products__cards__item__link">
                    <img src={product.image} alt="" className="products__cards__item__link__image"/>
                </Link>
                <div className="products__cards__item__elem">
                    <h3 className="products__cards__item__elem__theme">
                        {
                            productTitle
                        }
                    </h3>

                    <p className="products__cards__item__elem__price">
                        {
                            resultPrice.toFixed(2)
                        }
                    </p>

                    <div className="products__cards__item__elem__buttons">
                        {
                            isAdded ?
                                <AddedToCart/> :
                                <AddToCart product={product}/>
                        }
                        <AddToFavorite product={product}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;