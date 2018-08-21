import React from 'react';
import PropTypes from 'prop-types';
import PlayBtn from '../PlayBtn/PlayBtn.jsx';
import footer_logo from '../../images/footer-logo.png';

const Footer = () => {
    return (
    	<div className='section'>
        <article className='footer'>
        <div className='footer__logo'>
        <img src={footer_logo} />
        </div>
            <PlayBtn iframesrc='//rutube.ru/play/embed/11266597'/>
           <span className='license'>© 2018 KIMBERLY-CLARK WORLDWIDE.INC., TNT Broadcasting Network JSC</span>
        </article>
        </div>
    );
};

export default Footer;