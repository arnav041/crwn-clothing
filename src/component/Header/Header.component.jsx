import React from 'react'
import './Header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'



const Header = ({ currentUser }) => (
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
        </div>
    </div>
)


export default Header;