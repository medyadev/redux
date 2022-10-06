import React from 'react';
import './style/Footer.scss'
import {BsFacebook, BsFillHandbagFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer">
                        <Link to={'/'}>
                            <BsFillHandbagFill
                                className="footer-icon"
                            />
                        </Link>
                        <ol className='footer__ol'>
                            <li className='footer__ol__li'><Link to='/products'
                                                                 className='footer__ol__li__link'>Product</Link></li>
                            <li className='footer__ol__li'><Link to="/favorites"
                                                                 className='footer__ol__li__link'>Favorite</Link></li>
                            <li className='footer__ol__li'><Link to={'/basket'}
                                                                 className='footer__ol__li__link'>Basket</Link></li>
                        </ol>
                        <div className='footer__messenger'>
                            <a href='https://www.instagram.com/' className='footer__messenger__item'><AiFillInstagram/></a>
                            <a href='https://www.twitter.com/' className='footer__messenger__item'><AiFillTwitterCircle/></a>
                            <a href='https://www.facebook.com/' className='footer__messenger__item'><BsFacebook/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;