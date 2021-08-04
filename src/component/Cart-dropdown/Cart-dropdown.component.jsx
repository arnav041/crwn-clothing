import React from 'react';
import './Cart-dropdown.style.scss';

import CustomButton from '../Custom-button/Custom-button.component.jsx'
import { connect } from 'react-redux'
import CartItem from '../Cart-item/Cart-item.component.jsx'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions';



const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                )
                :
                <span className="empty-message" >Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }
        } >Go TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));