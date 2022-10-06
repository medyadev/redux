import React from 'react';
import {AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, decreaseQty, deleteFromBasket} from "../../../../redux/actions/actionCreators";
import {Link} from "react-router-dom";

const TableRow = ({product}) => {
    const dispatch = useDispatch()
    const {currencies, defaultRate} = useSelector(s => s.catalog)
    let resultPrice = product.price * currencies[defaultRate]
    return (
        <>
            <tr className="basket__table__tbody__tr">
                <td className="basket__table__tbody__tr__td">
                    {product.title}
                </td>
                <td className="basket__table__tbody__tr__td">
                    <Link to={`/product-detail/${product.id}`}>
                        <img src={product.image} alt=""
                             className="basket__table__tbody__tr__td__image"
                        />
                    </Link>
                </td>
                <td className="basket__table__tbody__tr__td">
                    {(resultPrice * product.quantity).toFixed(2)}
                </td>
                <td className="basket__table__tbody__tr__td">
                    <div className="basket__table__tbody__tr__td__item">
                        <div className="basket__table__tbody__tr__td__item__quantity">
                            <span
                                onClick={() => dispatch(addToBasket(product))}
                            ><AiOutlinePlus/></span>
                            {product.quantity}
                            <span
                                style={
                                    product.quantity === 1 ? {
                                            color: '#ff0000',
                                        } :
                                        {
                                            color: '#000000'
                                        }
                                }
                                onClick={() => dispatch(decreaseQty(product.id))}
                            ><AiOutlineMinus/></span>
                        </div>
                        <button
                            className="basket__table__tbody__tr__td__item__btn"
                            onClick={() => dispatch(deleteFromBasket(product.id))}
                        >
                            <AiTwotoneDelete/>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TableRow;