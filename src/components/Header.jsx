import React, {Fragment} from 'react';
import logo from '../assets/logoBurger.png'

const Header = () => {
    return (
        <Fragment>
            <header>
              <img src={logo} alt="logo" className='logo' />
             <h1>Best Burger</h1>
            </header>
        </Fragment>
    );
};

export default Header;