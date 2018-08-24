import React, {Component} from 'react';
import $ from "jquery";
import Button from '../../Button/Button.jsx';
import contest4_icon from '../../../images/contest/contest4-icon.png';
import tagline_demo from '../../../images/contest/taglines/tagline-demo.png';
import contest_tagline1 from '../../../images/contest/taglines/contest4-title1.png';
import contest_tagline2 from '../../../images/contest/taglines/contest4-title2.png';
import contest_tagline3 from '../../../images/contest/taglines/contest4-title3.png';
import contest_tagline4 from '../../../images/contest/taglines/contest4-title4.png';
import contest_tagline5 from '../../../images/contest/taglines/contest4-title5.png';
import contest_tagline6 from '../../../images/contest/taglines/contest4-title6.png';
import contest_tagline7 from '../../../images/contest/taglines/contest4-title7.png';
import contest_tagline8 from '../../../images/contest/taglines/contest4-title8.png';
import contest_tagline9 from '../../../images/contest/taglines/contest4-title9.png';
import contest_tagline10 from '../../../images/contest/taglines/contest4-title10.png';
// import tagline_border from '../../../images/contest/contest4-border.png';
import contest_girl from '../../../images/contest/contest-girl1.png';

class Taglines extends React.Component {
   componentDidMount() {
       this.setState({
         imageUrl: window.imageUrl,
         imageWithTag: window.imageUrl2,
         imageShare:window.imageUrl3,
         tagNum:''
    });
  }
  state = {
      imageUrl:'',
      imageWithTag:'',
      imageShare:'',
      tagNum:''
  };

 _handleSubmit4(val) {
   this.setState({tagNum: val})
 }
    _handleSubmit3(e) {
    const taglines = document.querySelectorAll('.tagelement');
    taglines.forEach(item => item.addEventListener('click', taglinesActive));
    var tagNum;

    function taglinesActive() {
        taglines.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        tagNum = this.querySelector('img').getAttribute('data-num');
        console.log(tagNum, 'tagNum2323');
        let img3 = document.createElement('img');
        img3.classList.add('tagline_img');

        var srcImg;
        switch (String(tagNum)) {
            case '1': 
             srcImg = contest_tagline1;  
                    break;
            case '2': 
              srcImg = contest_tagline2;  
                    break;
            case '3': 
              srcImg = contest_tagline3;  
                    break;
            case '4': 
              srcImg = contest_tagline4;  
                    break;
             case '5': 
              srcImg = contest_tagline5;  
                    break;
             case '6': 
              srcImg = contest_tagline6;  
                    break;
             case '7': 
              srcImg = contest_tagline7;  
                    break;
             case '8': 
              srcImg = contest_tagline8;  
                    break;
             case '9': 
              srcImg = contest_tagline9;  
                    break;
             case '10': 
              srcImg = contest_tagline10;  
                    break;
        }

        img3.src = srcImg;
        if (document.querySelector('.tagline_img')) {
            document.querySelector('.tagline_img').remove();
        }
        document.querySelector('.block_tagline').appendChild(img3);
    }
        $.ajax({
        type: 'POST',
        url: 'https://kotex.tnt-online.ru/photo.php',
        data: {action:'add_tag', id: window.dataIdVar, tag: this.state.tagNum},
          success: function(data) {
              var tempUrl3 = JSON.parse(data);
                window.imageUrl3 = tempUrl3.url;
                 this.props.submitNote3(window.imageUrl3);  
                 console.log(window.imageUrl3, 'window.imageUrl3'); 
                 console.log(this.state.imageUrl3, 'this.state.imageUrl3'); 
                 console.log(this.state.imageShare, 'this.state.imageShare'); 
        }.bind(this),
        error: function(data) {
             //  var tempUrl2 = JSON.parse(data);
               //  window.imageUrl2 = tempUrl2.url;
                window.imageUrl3 = 'http://bastion.tv/media/news/d4e0d3c853ac46f1a5f9b751ab299cdb.jpg';
                 this.props.submitNote3(window.imageUrl3); 
                 console.log(this.state.tagNum, 'this.state.tagNum');
                 console.log(window.imageUrl3, 'window.imageUrl3'); 
                 console.log(this.state.imageUrl3, 'this.state.imageUrl3'); 
                 console.log(this.state.imageShare, 'this.state.imageShare'); 
        }.bind(this)
        });

        // Hide/show
         document.querySelector('.contestpage__block4').classList.add('hide');
         document.querySelector('.contestpage__block4').classList.remove('active');
         document.querySelector('.contestpage__block5').classList.add('active');
         document.querySelector('.contestpage__block5').classList.remove('hide');
    }
render() {
return (
<div className='contestpage__block4 contest-child'>
    <div className='contestpage__block2-left'>
        <div className='block2-icon'>
            <img className='contest-icon' src={contest4_icon}/> Добавь
            <br/>мотивирующую
            <br/>фразу
        </div>
    </div>

    <div className='contestpage__block4-middle'> 
      <div className='tagline_frame'>
          <img className='frame' src={this.props.userFrame}/>
          <div className="block_tagline"></div>
      </div>
    </div>

    <div className='contestpage__block4-right'>
        <div className='contestpage__block4-content'>
        <div className='contestpage__block4-taglines'>
          <div className='contestpage-taglines-left'>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(1)}><img data-num="1" className='tag' src={contest_tagline1}/>
            <span></span>
            </div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(2)}><img data-num="2" className='tag' src={contest_tagline2}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(3)}><img data-num="3" className='tag' src={contest_tagline3}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(4)}><img data-num="4" className='tag' src={contest_tagline4}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(5)}><img data-num="5" className='tag' src={contest_tagline5}/>
            <span></span></div>
          </div>
          <div className='contestpage-taglines-right'>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(6)}><img data-num="6" className='tag' src={contest_tagline6}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(7)}><img data-num="7" className='tag' src={contest_tagline7}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(8)}><img data-num="8" className='tag' src={contest_tagline8}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(9)}><img data-num="9" className='tag' src={contest_tagline9}/>
            <span></span></div>
            <div className='tagelement' onClick={(e)=>this._handleSubmit4(10)}><img data-num="10" className='tag' src={contest_tagline10}/>
            <span></span></div>
        </div>
         </div>
           <div className='button select-tagline' onClick={(e)=>this._handleSubmit3(e)}>Выбрать тэг</div>
        </div>
    </div>

</div>
);
}
};

export default Taglines;