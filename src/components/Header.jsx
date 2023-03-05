import React, {Fragment} from 'react';
import logo from '../assets/logoBurger.png'

const Header = () => {
    return (
        <Fragment>
            <div className='header'>
              <img src={logo} alt="logo" className='logo' />
             <h1>Best Burger</h1>
            </div>
        </Fragment>
    );
};

export default Header;