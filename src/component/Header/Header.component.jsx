import React from 'react'
import './Header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import CartIcon from '../Cart-icon/Cart-icon.component.jsx'
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component.jsx'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';




const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header">
        <Link className="logo-container" to='/' >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>
            {
                currentUser
                    ?
                    (<div className='option' onClick={signOutStart} >SIGN OUT</div>)
                    :
                    (<Link className='option' to='/signin' >SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            !hidden ? <CartDropdown /> : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

