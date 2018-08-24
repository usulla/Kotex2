import React, {Component} from 'react';
import $ from "jquery";
import Img from 'react-image'
import Slider from "react-slick";
import OwlItem from '../../OwlItem/OwlItem.jsx';
import Button from '../../Button/Button.jsx';
import contest3_icon from '../../../images/contest/contest3-icon.png';
import contest_girl from '../../../images/contest/contest-girl1.png';
import contest_frame1 from '../../../images/contest/frames/frames_1.png';
import contest_frame2 from '../../../images/contest/frames/frames_2.png';
import contest_frame3 from '../../../images/contest/frames/frames_3.png';
import contest_frame4 from '../../../images/contest/frames/frames_4.png';
import contest_frame5 from '../../../images/contest/frames/frames_5.png';

import contest_tagline1 from '../../../images/contest/taglines/contest4-title1.png';
import contest_tagline2 from '../../../images/contest/taglines/contest4-title2.png';
import contest_tagline3 from '../../../images/contest/taglines/contest4-title3.png';

import contest_tagline5 from '../../../images/contest/taglines/contest4-title5.png';
import contest_tagline6 from '../../../images/contest/taglines/contest4-title6.png';
import contest_tagline7 from '../../../images/contest/taglines/contest4-title7.png';
import contest_tagline8 from '../../../images/contest/taglines/contest4-title8.png';
import contest_tagline9 from '../../../images/contest/taglines/contest4-title9.png';
import contest_tagline10 from '../../../images/contest/taglines/contest4-title10.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div onClick={onClick}><i className="fas fa-chevron-right"></i></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
     <div onClick={onClick}><i className="fas fa-chevron-left"></i></div>
  );
}

class Frames extends React.Component {
   componentDidMount() {
       this.setState({
         imageUrl: window.imageUrl,
         imageWithTag: window.imageUrl2
    });
  }
  
   state = {
      imageUrl:'',
      imageWithTag:''
    };

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', imageUrl: window.imageUrl, imageWithTag:window.imageUrl};
  }

  submitNote = () => {
    this.props.submitNote('maria');
};

  _handleSubmit2(e) {
    console.log(8989898985555)
      $.ajax({
        type: 'POST',
        url: 'https://kotex.tnt-online.ru/photo.php',
        data: {action:'add_frame', id: window.dataIdVar, frame: window.dataFramesId},
        success: function(data) {
              var tempUrl2 = JSON.parse(data);
                 window.imageUrl2 = tempUrl2.url;
            //    window.imageUrl2 = 'https://4dancing.ru/files/u5304/azerbaijani-dances-1.jpg';
                 this.props.submitNote2(window.imageUrl2);  
                 console.log(window.imageUrl2, 'window.imageUrl2'); 
                  console.log(this.state.imageUrl2, 'this.state.imageUrl2'); 
                 console.log(this.state.imageWithTag, 'this.state.imageWithTag');
        }.bind(this),
        error: function(data) {
             //  var tempUrl2 = JSON.parse(data);
               //  window.imageUrl2 = tempUrl2.url;
                window.imageUrl2 = 'https://4dancing.ru/files/u5304/azerbaijani-dances-1.jpg';
                 this.props.submitNote2(window.imageUrl2);  
                 console.log(window.imageUrl2, 'window.imageUrl2'); 
                  console.log(this.state.imageUrl2, 'this.state.imageUrl2'); 
                 console.log(this.state.imageWithTag, 'this.state.imageWithTag'); 
        }.bind(this)
    });
      // Hide/show
         document.querySelector('.contestpage__block3').classList.add('hide');
         document.querySelector('.contestpage__block3').classList.remove('active');
         document.querySelector('.contestpage__block4').classList.add('active');
         document.querySelector('.contestpage__block4').classList.remove('hide');
      }
      render() {
      var settings2 = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    console.log(this.state.imageUrl, 'dfd1113333333333333333')
    console.log(this.props.userImg, 'this.props.userImg')
    return (
<div className='contestpage__block3 contest-child hide'>
    <div className='contestpage__block2-left'>
        <div className='block2-icon'>
            <img className='contest-icon' src={contest3_icon}/> Оформи
            <br/>креативную
            <br/>рамку
        </div>
    </div>
    <div className='contestpage__block3-right'>
        <div className='contestpage__block3-content'>
            <Slider {...settings2}>
                <div className="owlitem" data-id='1'>
                   <div className="item_frame">
                    <img src={contest_frame1}/>
                   </div>
                   <div className="item_img">
          <img src={this.props.userImg}/>
                   </div>
                </div>
                <div className="owlitem" data-id='2'>
                <div className="item_frame">
                   <img src={contest_frame2}/>
                   </div>
                <div className="item_img">
          <img src={this.props.userImg}/>
                </div>
                 </div>
                 <div className="owlitem" data-id='3'>
                <div className="item_frame">
                    <img src={contest_frame3}/>
                   </div>
                <div className="item_img">
       <img src={this.props.userImg}/>
                </div>
                 </div>
                  <div className="owlitem" data-id='4'>
                <div className="item_frame">
                    <img src={contest_frame4}/>
                   </div>
                <div className="item_img">
                    <img src={this.props.userImg}/>
                </div>
                 </div>
                  <div className="owlitem" data-id='5'>
                  <div className="item_frame">
                    <img src={contest_frame5}/>
                   </div>
                 {/* <div className="item_img">
                    {window.$imagePreview}
                </div> */}
                <div className="item_img">
               <img src={this.props.userImg}/>
                </div>
                 
                 </div>
             </Slider>
              <div className='button select-frame' onClick={(e)=>this._handleSubmit2(e)}>Выбрать рамку</div>
        </div>
    </div>
</div>
)
  }
};
document.addEventListener('DOMContentLoaded', () => {

	const allFrames = document.querySelectorAll('.slick-slide');
	window.dataFramesId;
       allFrames.forEach(item => item.addEventListener('click', () => {
          toggleActiveSlide(item);
       }));
       allFrames.forEach(item => item.addEventListener('touchstart', () => {
          toggleActiveSlide(item);
       }));
      function toggleActiveSlide(item){
         window.dataFramesId = item.querySelector('.owlitem').getAttribute('data-id');
           allFrames.forEach((item2) => {
            item2.classList.remove('active-slide');
           })
           item.classList.add('active-slide');
           console.log(window.dataFramesId, 'window.dataFramesId');
      }
});
 

export default Frames;