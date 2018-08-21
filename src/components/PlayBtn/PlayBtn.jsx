import React from 'react';
import $ from 'jquery';

const PlayBtn = ({iframesrc}) => {
	
    return (
        <span className='clickplay' data-src={iframesrc}>
            <i className="far fa-play-circle"></i>
        </span>
    );
};
   document.addEventListener('DOMContentLoaded', () => {
    let clickPlayBtns = document.querySelectorAll('.clickplay');

    clickPlayBtns.forEach(btn => btn.addEventListener('click', () => {
    btn.style.display = 'none';
	/* var parentSection =  findParent(btn, 'article');*/
	var parentSection =  $(btn).parents('article');
	var iframe = document.createElement('iframe');
	iframe.classList.add('iframevideo');
	iframe.src = btn.getAttribute('data-src');
	iframe.setAttribute('webkitAllowFullScreen', '');
	iframe.setAttribute('mozallowfullscreen', '');
	iframe.setAttribute('allowFullScreen', '');
	iframe.setAttribute('frameborder', '0');
$('.videofullpage-iframe').html(iframe);

    iframe.onload = () => {
		iframe.contentWindow.postMessage(JSON.stringify({
			type: 'player:play',
			data: {}
		}), '*');
    }
        // window.addEventListener('message', function (event) {
    //     var message = JSON.parse(event.data);
    //         if (message.data.state == 'stopped'){
    //         	videoFullFage.replaceChild(iframe, clickPlayBtn);
    //         }
    // });
    }));
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

export default PlayBtn;