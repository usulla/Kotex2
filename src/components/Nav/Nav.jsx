import React from 'react';
import PropTypes from 'prop-types';
import './nav.js';
import kotex_logo from '../../images/logo.png';

const Nav = ({list}) => {
    return (
        <nav className='menu'>
                <div className='logo'>
                <a href='https://kotex.ru/?utm_source=tnt_online.ru&utm_medium=sp&utm_term=sites&utm_content=logo&utm_campaign=1231_kotex_sponsorship_digital_18' target='_blank'><img src={kotex_logo} alt="Kotex"/></a></div>
                <ul className="menu-ul menu__menu-ul">
                    {list.map((li, index) => 
                        <li key={index} className="menu-ul__li">
                        <a href={`#${li[1]}`}>{li[0]}</a>
                        </li>
                    )
                    }
                </ul>

        </nav>
    );
};

Nav.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Nav;