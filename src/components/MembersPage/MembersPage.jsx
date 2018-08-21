import React from 'react';
import Slider from "react-slick";
import $ from "jquery";
import OwlItem from '../OwlItem/OwlItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div onClick={onClick}><i className="fas fa-chevron-left"></i></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
     <div onClick={onClick}><i className="fas fa-chevron-right"></i></div>
  );
}
const MembersPage = ({listmembers}) => {
     var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      rows: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
             rows: 1
          }
        }
      ]
    };
    return (
        <article className='memberpage section'>
        <div className='center_block'>
        <div className='members__toggle-blocks'>
           <div className='members__block memberpage__toggle'>
           Участницы<br/> <span>конкурса</span>
           </div>
           <div className='winners__block memberpage__toggle'>
            Победительницы<br/> <span>конкурса</span>
            </div>
        </div>
        <div className="memberpage__container">
            <Slider {...settings}>
                    {listmembers.map((item, index) => 
                      <OwlItem key={index} imgsrc={item}/>
                )
                }
           </Slider>
        </div>
         </div>
        </article>
    );
};
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(call2, 1000);
    window.addEventListener('resize', () => {
       call2(); 
    });
   
    function call2() {
        var membersCarousel;
        membersCarousel = document.querySelector('.memberpage__container');
        const membersToggle = document.querySelector('.members__toggle-blocks');
        const membersCarouselHeight = membersCarousel.offsetHeight + membersToggle.offsetHeight;
        var membersMarginTop;
        if(window.innerWidth > 768){
        membersMarginTop = ((window.innerHeight-50) - membersCarouselHeight) / 2;
        }
        else {
          membersMarginTop = ((window.innerHeight) - membersCarouselHeight) / 2;
        }
        if(window.innerWidth > 768){
        membersToggle.style.marginTop = `${membersMarginTop}px`;
       }
    }
});
export default MembersPage;