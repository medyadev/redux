import React from 'react';
import {useSelector} from "react-redux";
import TableRow from "./TableRow";
import './style/Basket.scss'

const Basket = () => {
    const {basket} = useSelector(s => s.basket)
    const {currencies, defaultRate} = useSelector(s => s.catalog)
    const totalSum = basket.reduce((acc, el) => {
        return acc + (el.price * currencies[defaultRate]) * el.quantity
    }, 0)
    return (
        <>
            <section id="basket">
                <div className="container">
                    <div className="basket">
                        {
                            basket.length === 0 ?
                                <h1 className="basket__title">There are no products in the cart!</h1> :
                                <table className="basket__table"
                                       style={{
                                           margin: '2vw 0 5vw 0',
                                       }}
                                >
                                    <thead className="basket__table__thead">
                                    <tr className="basket__table__thead__tr">
                                        <th className="basket__table__thead__tr__th product-name">
                                            Product name
                                        </th>
                                        <th className="basket__table__thead__tr__th">
                                            Image
                                        </th>
                                        <th className="basket__table__thead__tr__th">
                                            Price
                                        </th>
                                        <th className="basket__table__thead__tr__th">
                                            Quantity
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="basket__table__tbody">
                                    {
                                        basket.map(el => <TableRow key={el.id} product={el}/>)
                                    }
                                    <tr className="basket__table__tbody__tr">
                                        <td>
                                        </td>
                                        <td className="basket__table__tbody__tr__sum">
                                            Sum total
                                        </td>
                                        <td className="basket__table__tbody__tr__sum">
                                            {totalSum.toFixed(2)}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Basket;