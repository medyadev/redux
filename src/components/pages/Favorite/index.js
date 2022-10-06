import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    return (
        <>
            <section id="products">
                <div className="container">
                    <div className="products">
                        {
                            favorite.length === 0 ?
                                <h1 className="fav__title">You don't have any products you like!</h1> :
                                <div>
                                    <h1 className="products__title">Your favorite products!</h1>
                                    <div className="products__cards">
                                        {
                                            favorite.map(product => <Card product={product} key={product.id}/>)
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Favorite;