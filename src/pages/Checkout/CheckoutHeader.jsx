import { Link } from 'react-router-dom';
import './checkoutHeader.css';
import Logo from '../../assets/images/logo.png';
import Mobile_logo from '../../assets/images/mobile-logo.png'
import Checkout_lock_icon from '../../assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantiy;
  });
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={Logo} />
              <img className="mobile-logo" src={Mobile_logo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{totalQuantity} items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src={Checkout_lock_icon} />
          </div>
        </div>
      </div>
    </>
  );
}