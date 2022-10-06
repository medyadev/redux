import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getSingleProduct} from "../../../redux/actions/actionCreators";
import AddedToCart from "../../ui/AddedToCart";
import AddToCart from "../../ui/AddToCart";
import AddToFavorite from "../../ui/AddToFavorite";
import './style/SinlePage.scss'

const SinglePage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {singleProduct} = useSelector(s => s.catalog)
    console.log(singleProduct)
    const {title, image, description, price} = singleProduct
    const {basket, currencies, defaultRate} = useSelector(s => s)
    let isAdded = basket.some(el => el.id === singleProduct.id)
    let resultPrice = price * currencies[defaultRate]
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch])
    return (
        <>
            <section id='single-product'>
                <div className="container">
                    <div className="single-product">
                        <div className="single-product__item">
                            <div className="single-product__item__img">
                                <img src={image} alt=""
                                     className="single-product__item__img__elem"
                                />
                            </div>
                        </div>
                        <div className="single-product__item">
                            <div className="single-product__item__elem">
                                <h1 className="single-product__item__elem__title">{title}</h1>
                                <p className="single-product__item__elem__desc">{description}</p>
                                <p className="single-product__item__elem__price">{resultPrice}</p>
                            </div>
                            <div className="buttons">
                                {
                                    isAdded ?
                                        <AddedToCart/> :
                                        <AddToCart product={singleProduct}/>
                                }
                                <AddToFavorite product={singleProduct}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinglePage;