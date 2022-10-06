import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './style/Header.scss'
import {BsFillBasket3Fill} from "react-icons/bs";
import {MdOutlineFavorite} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";
import {SiProducthunt} from "react-icons/si";
import {BsFillHandbagFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {convertCurrency} from "../../redux/actions/actionCreators";

const Header = () => {
    const dispatch = useDispatch()
    return (
        <>
            <header id='header'>
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to='/'>
                                <BsFillHandbagFill/>
                            </Link>
                        </div>
                        <nav className="header__menu">
                            <NavLink to="/" className="header__menu__link">Home &nbsp;<AiFillHome/></NavLink>
                            <NavLink to="/products" className="header__menu__link">Product &nbsp;<SiProducthunt/></NavLink>
                            <NavLink to="/favorites" className="header__menu__link">Favorite &nbsp;<MdOutlineFavorite/></NavLink>
                            <NavLink to="/basket" className="header__menu__link">Basket &nbsp;<BsFillBasket3Fill/></NavLink>
                            <select name="" id="" className='header__menu__select'
                                    onChange={(e) => dispatch(convertCurrency(e.target.value))}
                            >
                                <option value="$">$</option>
                                <option value="Som">Som</option>
                                <option value="Rub">Rub</option>
                            </select>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;