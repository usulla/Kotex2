import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contest5_icon from '../../../images/contest/contest5-icon.gif';
import tagline_demo from '../../../images/contest/taglines/tagline-demo.png';
import contest_tagline1 from '../../../images/contest/taglines/contest4-title1.png';
import contest_tagline9 from '../../../images/contest/taglines/contest4-title9.png';

const SharePhoto = () => { 
    return (
<div className='contestpage__block5 contest-child'>
    <div className='contestpage__block2-left'>
        <div className='block2-icon'>
            <img className='contest-icon' src={contest5_icon}/> Поделись
            <br/>с друзьями
            <br/>в соц.сетях
        </div>
    </div>

    <div className='contestpage__block5-middle'> 
      <div className='block5-tagline_frame'>
          <img className='frame' src={tagline_demo}/>
          <div className="block_tagline"></div>
      </div>
      <div className='tagline_share'>
        <span className='vk'><i class="fab fa-vk"></i></span>
        <span className='fb'><i class="fab fa-facebook-f"></i></span>
      </div>
    </div>
    
</div>
);
};

document.addEventListener('DOMContentLoaded', () => {
    const taglines = document.querySelectorAll('.tagelement');
    taglines.forEach(item => item.addEventListener('click', taglinesActive));

    function taglinesActive() {
        taglines.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        let tagNum = this.querySelector('img').getAttribute('data-num');
        let img = document.createElement('img');
        img.classList.add('tagline_img');
        let srcImg;
        img.setAttribute('src', srcImg);
        if (document.querySelector('.tagline_img')) {
            document.querySelector('.tagline_img').remove();
        }
        document.querySelector('.block_tagline').appendChild(img);
    }
});

export default SharePhoto;