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
            poster="http://mydemo1.landmary.ru/video_bg.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="http://mydemo2.landmary.ru/tancy.mp4" type="video/mp4" />
        </Video>

        	
        </div>
           <PlayBtn iframesrc='//rutube.ru/play/embed/11266597'/>
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

export default VideoFullPage;