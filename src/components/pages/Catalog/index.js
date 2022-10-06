import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './style/Catalog.scss';
import ProductCard from "../../ProductCard";
import {getProducts} from "../../../redux/actions/actionCreators";

const Catalog = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(s => s.catalog)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <section id="products">
                <div className="container">
                    <div className="products">
                        <h1 className="products__title">Products</h1>
                        <div className="products__cards">
                            {
                                products.map(product => <ProductCard product={product} key={product.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Catalog;