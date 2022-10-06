import React from 'react';
import AddToCart from "../../../ui/AddToCart";
import DeleteFromFavorite from "../../../ui/DeleteFromFavorite";
import {useSelector} from "react-redux";
import AddedToCart from "../../../ui/AddedToCart";

const Card = ({product}) => {
    const {basket} = useSelector(s => s.basket)
    const {currencies, defaultRate} = useSelector(s => s.catalog)
    let resultPrice = product.price * currencies[defaultRate]
    let isAdded = basket.some(el => el.id === product.id)
    let productTitle = ''
    product.title.split(' ').slice(0, 2).map(el => productTitle += el)
    return (
        <>
            <div className="products__cards__item">
                <img src={product.image} alt="" className="products__cards__item__link__image"/>
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
                        <DeleteFromFavorite product={product}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;