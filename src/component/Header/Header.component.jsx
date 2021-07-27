import React from 'react'
import './Header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';

import CartIcon from '../Cart-icon/Cart-icon.component.jsx'
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component.jsx'




const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <div className="logo-container" to='/' >
            <Logo className="logo" />
        </div>
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
                    (<div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>)
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

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);