import React from 'react';
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

const Taglines = () => { 
   document.addEventListener('DOMContentLoaded', () => {
    console.log(contest_girl, 'contest4_icon')
   })
    const taglines = document.querySelectorAll('.tagelement');
    taglines.forEach(item => item.addEventListener('click', taglinesActive));
    var tagNum;

    function taglinesActive() {
        taglines.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        tagNum = this.querySelector('img').getAttribute('data-num');
        let img3 = document.createElement('img');
        img3.classList.add('tagline_img');

        var srcImg;
        switch (String(tagNum)) {
            case '1': 
             srcImg = contest_tagline1;  
             console.log('1111');
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

        img3.src = contest_girl;
        console.log(img3, 'img2');
        if (document.querySelector('.tagline_img')) {
            document.querySelector('.tagline_img').remove();
        }
        document.querySelector('.block_tagline').appendChild(img3);
        // CLICK Button
        document.querySelector('.select-tagline').addEventListener('click', () => {
        var idFromServer = 6745;
        $.ajax({
        type: 'POST',
        url: '',
        data: {id: idFromServer, tag: tagNum},
        success: function(data) {
            if (data.result == 'success'){
            }
        },
        error: function(xhr, str) {
        }
        });
        // Hide/show
         document.querySelector('.contestpage__block4').classList.add('hide');
         document.querySelector('.contestpage__block4').classList.remove('active');
         document.querySelector('.contestpage__block5').classList.add('active');
         document.querySelector('.contestpage__block5').classList.remove('hide');
        });
    }


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
          <img className='frame' src={tagline_demo}/>
          <div className="block_tagline"></div>
      </div>
    </div>

    <div className='contestpage__block4-right'>
        <div className='contestpage__block4-content'>
        <div className='contestpage__block4-taglines'>
          <div className='contestpage-taglines-left'>
            <div className='tagelement'><img data-num="1" className='tag' src={contest_tagline1}/>
            <span></span>
            </div>
            <div className='tagelement'><img data-num="2" className='tag' src={contest_tagline2}/>
            <span></span></div>
            <div className='tagelement'><img data-num="3" className='tag' src={contest_tagline3}/>
            <span></span></div>
            <div className='tagelement'><img data-num="4" className='tag' src={contest_tagline4}/>
            <span></span></div>
            <div className='tagelement'><img data-num="5" className='tag' src={contest_tagline5}/>
            <span></span></div>
          </div>
          <div className='contestpage-taglines-right'>
            <div className='tagelement'><img data-num="6" className='tag' src={contest_tagline6}/>
            <span></span></div>
            <div className='tagelement'><img data-num="7" className='tag' src={contest_tagline7}/>
            <span></span></div>
            <div className='tagelement'><img data-num="8" className='tag' src={contest_tagline8}/>
            <span></span></div>
            <div className='tagelement'><img data-num="9" className='tag' src={contest_tagline9}/>
            <span></span></div>
            <div className='tagelement'><img data-num="10" className='tag' src={contest_tagline10}/>
            <span></span></div>
        </div>
         </div>
            <Button text='Выбрать тэг' classadd='select-tagline' />
        </div>
    </div>

</div>
);
};

export default Taglines;