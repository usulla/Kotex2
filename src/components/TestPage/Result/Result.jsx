import React from 'react';
import test_result1 from '../../../images/test/test-result1.jpg';
import result_girl from '../../../images/test/test-girl.png';
import top_logo from '../../../images/header/header_logo.png';
import result_logo from '../../../images/logo.png';

const Result = ({results, datakey}) => {
    return(
      <div className='result' data-key={datakey}>
          <div className='result__girl'><img src={result_girl}/></div>

          <div className='result__top-text'>{results.title[0]}<br/> {results.title[1]} <img src={top_logo}/></div>
          <div className='result__text'>{results.description}
          <div className='result_share'>
             <span className='vk'><i class="fab fa-vk"></i></span>
             <span className='fb'><i class="fab fa-facebook-f"></i></span>
          </div>
          </div>
          <div className='result__logo'><img src={result_logo}/></div>

      </div>
    );
};

export default Result;