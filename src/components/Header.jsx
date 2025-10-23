import {Link, NavLink } from 'react-router-dom';
import '../pages/header.css';
import Logo_white from '../assets/images/logo-white.png';
import Mobile_logo_white from '../assets/images/mobile-logo-white.png';
import Search_icon from '../assets/images/icons/search-icon.png';
import Cart_icon from '../assets/images/icons/cart-icon.png';

export function Header({cart}){

    let totalQuantity = 0;

    cart.forEach((cartItem)=>{
        totalQuantity += cartItem.quantity;
    })
    return(
        <>
            <div className="header">
                <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo" src={Logo_white} />
                    <img className="mobile-logo" src={Mobile_logo_white} />
                </NavLink>
                </div>

                <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={Search_icon} />
                </button>
                </div>

                <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={Cart_icon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
                </div>
            </div>
        </>
    );
}