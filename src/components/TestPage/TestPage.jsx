import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import Answers from './Answers/Answers.jsx';
import Result from './Result/Result.jsx';
import Questions from './Questions/Questions.jsx';
import GirlImg from './GirlImg/GirlImg.jsx';
import PanelAnswers from '../PanelAnswers/PanelAnswers.jsx';
import test_girl from '../../images/test/test-girl.png';
import test_girl0 from '../../images/test/test-girl1.png';
import test_girl1 from '../../images/test/test-girl2.png';
import test_girl2 from '../../images/test/test-girl3.png';
import test_girl3 from '../../images/test/test-girl4.png';
import test_girl4 from '../../images/test/test-girl5.png';
import './testpage.js';

const TestPage = ({datatest, dataresults}) => {
    // console.log(datatest, 'datatest');
    return (
        <article className='testpage section'>
            <div className='testpage__view testpage__view1'>
                <img className='test-girl' src={test_girl}/>
                <div className="testpage__view1-info">
                    <div className="testpage__view1-text">
                    Как далеко<br/> ты пройдешь<br/><span>в шоу танцы</span>
                    </div>
                    <Button text='Пройти тест' classadd='start-test'/>
                </div> 
            </div>
            <div className='testpage__viewcontainer'>
               <PanelAnswers/>
             {datatest
                .map((item, index) => 
            <div className='testpage__view testpage__child' key={index} data-index={index}>
                <div className='testpage__child-girl'>
                    <GirlImg datasrc={index}/>
                </div>
                <div className='testpage__child-info'>
                  <Questions question={item.question} qnum={item.qnum} />
                  <Answers answers={item.answers}/>
                </div> 
            </div>
             )
            }
            <div className='testpage__view testpage__result'>
            <div className='results'>
            {dataresults
                .map((item, index) => 
              <Result key={index} datakey={index} results={item} />
               )
            }
            </div>
            </div>
            </div>
        </article>
    );
};

export default TestPage;