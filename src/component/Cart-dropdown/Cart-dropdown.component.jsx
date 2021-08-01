import React from 'react';
import './Cart-dropdown.style.scss';

import CustomButton from '../Custom-button/Custom-button.component.jsx'
import { connect } from 'react-redux'
import CartItem from '../Cart-item/Cart-item.component.jsx'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);