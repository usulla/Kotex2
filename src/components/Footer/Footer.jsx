import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import PlayBtn from '../PlayBtn/PlayBtn.jsx';
import footer_logo from '../../images/footer-logo.png';

const Footer = () => {
    return (
    	<div className='section'>
        <article className='footer'>
        <div className='footer__logo'>
        <img src={footer_logo} />
        </div>
            <PlayBtn classadd='footer-play' iframesrc='//rutube.ru/play/embed/11336613'/>
           <span className='license'>© 2018 KIMBERLY-CLARK WORLDWIDE.INC., TNT Broadcasting Network JSC</span>
        </article>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    let clickPlayBtns = document.querySelector('.footer-play');

    clickPlayBtns.addEventListener('click', () => {
        console.log('play2');
    clickPlayBtns.style.display = 'none';
    /* var parentSection =  findParent(btn, 'article');*/
    var parentSection =  $(clickPlayBtns).parents('article');
    var iframe = document.createElement('iframe');
    iframe.classList.add('iframevideo');
    iframe.id = 'iframe2';
    iframe.src = clickPlayBtns.getAttribute('data-src');
    iframe.setAttribute('webkitAllowFullScreen', '');
    iframe.setAttribute('mozallowfullscreen', '');
    iframe.setAttribute('allowFullScreen', '');
    iframe.setAttribute('frameborder', '0');
    $('.footer').html(iframe);

    iframe.onload = () => {
        iframe.contentWindow.postMessage(JSON.stringify({
            type: 'player:play',
            data: {}
        }), '*');
    }
        // window.addEventListener('message', function (event) {
    //     var message = JSON.parse(event.data);
    //         if (message.data.state == 'stopped'){
    //          videoFullFage.replaceChild(iframe, clickPlayBtn);
    //         }
    // });
    });
     function findParent(el, tagname) {
      var elem = el; 
      console.log(elem.tagName, 'elem.tagName')
      while(elem.tagName.toLowerCase() !== tagname) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
       }
     return elem; 
    }
  });
export default Footer;