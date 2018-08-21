import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../src/css/output.css?ver=3';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import App from './components/App/App.jsx';
import change_or_girl from './images/change_or_girl.png';
// import registerServiceWorker from './registerServiceWorker';

const fullpageOptions = {
	  responsiveWidth: 768,
	  scrollBar: true,
      sectionClassName:'section',
      anchors:['sectionOne', 'sectionTwo', 'sectionThree', 'section4', 'section5', 'section6', 'section7', 'section8'],
      navigation:           false,
      arrowNavigation:      false,
      verticalCentered:false,
      fixedElements: '.menu, .change-screen',
      afterLoad: function(index, nextIndex, direction){
    	if(nextIndex.index == 0){
    	document.querySelector('.menu').classList.remove('small');
        document.querySelector('.logo').classList.remove('small');
    	}
    	if(document.body.classList.contains('fp-viewing-sectionOne')){
       document.querySelector('.menu').classList.remove('small');
        document.querySelector('.logo').classList.remove('small');
    }
    if (nextIndex.index == 1 && document.querySelector('#kotex_video')) {
    	//$('.videofullpage-iframe').css('z-index', '-1');
    	   $('#kotex_video')[0].play();
    }
    },
    onLeave: function(index, nextIndex, direction){
    	if(nextIndex.index != 0){
         document.querySelector('.menu').classList.add('small');
         document.querySelector('.logo').classList.add('small');
    	}
    }
}

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
      <div>
<App/>
           <div className='change-screen'>
            <img src={change_or_girl} />
            <span>
            Для просмотра<br/>
            промо-сайта поверните<br/>
            телефон в горизонтальное<br/>
            положение
            </span>
            </div>
      </div>
    );
  }}
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('root'));
// registerServiceWorker();
