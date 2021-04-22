import React from 'react';
import siteLogo from '../../images/logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <img src={siteLogo} alt="website logo" />

            <nav>
                <a href="#">Shop</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;