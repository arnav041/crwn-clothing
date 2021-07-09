import React from 'react'
import './Header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'



const Header = () => (
    <div className="header">
        <div className="logo-container" to='/' >
            <Logo className="logo" />
        </div>
        <div className="options">
            <Link to='shop' className="option">
                SHOP
            </Link>
            <Link to='/contact' className="option">
                CONTACT
            </Link>

        </div>
    </div>
)


export default Header