import React from 'react';
import sliderrunner from '../../images/test/slider-runner.png';

const PanelAnswers = () => {
        return (
          <div className='panelanswers'>
          <div className='slider-runner'><img src={sliderrunner}/></div>
          <div>
             <div className='panelanswers__item current'>
                <div className='slider-root'></div> 
                     <span>Зрительный зал</span>
             </div> 
             <div className='panelanswers__item'>
                <div className='slider-root'></div> 
                    <span>Кастинг</span>
             </div> 
             <div className='panelanswers__item'>
                <div className='slider-root'></div> 
                    <span>Середина проекта</span>
             </div> 
             <div className='panelanswers__item'>
                <div className='slider-root'></div> 
                    <span>Полуфинал</span>
             </div> 
            <div className='panelanswers__item'>
                <div className='slider-root'></div> 
                    <span>Финал</span>
             </div>  
             <div className='panelanswers__item'>
                <div className='slider-root'></div> 
                    <span>Победитель</span> 
             </div>
             </div> 
              </div> 
    );
};

export default PanelAnswers;