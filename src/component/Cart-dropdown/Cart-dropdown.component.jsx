import React from 'react';
import './Cart-dropdown.style.scss';

import CustomButton from '../Custom-button/Custom-button.component.jsx'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;