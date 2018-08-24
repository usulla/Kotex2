import React from 'react';
import $ from 'jquery';
import PlayBtn from '../PlayBtn/PlayBtn.jsx';
import video_tancy from '../../video/tancy.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const VideoFullPage = ({url}) => {
    var url = {video_tancy};
    return ( 
        <article className='videofullpage section'>
        <div className='videofullpage-iframe'>
        <Video className="kotex_video" id='kotex_video' autoPlay loop muted
            controls={['Volume', 'Fullscreen']}
            poster="https://kotex.tnt-online.ru/video/video.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://kotex.tnt-online.ru/video/tancy.mp4" type="video/mp4" />
        </Video>

        	
        </div>
           <PlayBtn classadd='fullpage-play' iframesrc='//rutube.ru/play/embed/11336534'/>
        </article>
    );
};

  /* document.addEventListener('DOMContentLoaded', () => {
    let clickPlayBtns = document.querySelector('.clickplay');
    clickPlayBtns.addEventListener('click', () => {
    clickPlayBtns.style.display = 'none';
    //url = {video_tancy}
   // $('#kotex_video source').attr('src',  url);

	/*$('.videofullpage-iframe').html('<video id="kotex_video2" loop preload="metadata" class="fullscreen-bg__video"><source src={video_tancy} type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"/><source src={video_tancy} type="video/webm" codecs="vp8, vorbis"/><source src={video_tancy} type="video/ogg" codecs="theora, vorbis"/></video>');
	*/
	/*
setTimeout(function(){
	document.querySelector('#kotex_video2').play()
	}, 1000)*/
   /*   });
     function findParent(el, tagname) {
      var elem = el; 
      console.log(elem.tagName, 'elem.tagName')
      while(elem.tagName.toLowerCase() !== tagname) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
       }
     return elem; 
    }
  }); */
document.addEventListener('DOMContentLoaded', () => {
    let clickPlayBtn = document.querySelector('.fullpage-play');

    clickPlayBtn.addEventListener('click', () => {
      console.log('play1');

  clickPlayBtn.style.display = 'none';
    $('#kotex_video')[0].pause();
    $('.kotex_video').css('display', 'none');

  /* var parentSection =  findParent(btn, 'article');*/
  var parentSection =  $(clickPlayBtn).parents('article');
  var iframe = document.createElement('iframe');
  iframe.classList.add('iframevideo');
  iframe.id = 'iframe1';
  iframe.src = clickPlayBtn.getAttribute('data-src');
  iframe.setAttribute('webkitAllowFullScreen', '');
  iframe.setAttribute('mozallowfullscreen', '');
  iframe.setAttribute('allowFullScreen', '');
  iframe.setAttribute('frameborder', '0');
  $('.kotex_video').css('display', 'none');
$('.videofullpage-iframe').append(iframe);
$('.videofullpage-iframe').append("<span class='close-btn-video'>х</span>");
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
      console.log(elem.tagName, 'elem.tagName');
      while(elem.tagName.toLowerCase() !== tagname) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
       }
     return elem; 
    }

    $(document).on('click', '.close-btn-video', function(){
           $('#iframe1').remove();
           $('.kotex_video').css('display', 'block');
           $('.fullpage-play').css('display', 'block');
           $('#kotex_video')[0].play();
            $('.close-btn-video').remove();
           
    });

  });
export default VideoFullPage;