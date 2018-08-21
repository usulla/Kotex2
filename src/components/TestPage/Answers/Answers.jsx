import React from 'react';

const Answers = ({answers}) => {
      window.parentPageIndex;
      let resultImg = 'test_result'+`${window.parentPageIndex}`;
        return (
    <div className='answer-all'>
      {answers
              .map((item, index) => 
               <div className='answer' data-index={index} key={index} data-points={item[1]}>
                  {item[0]}
               </div>
             )
      }
    </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {

    const answers = document.querySelectorAll('.answer');
    const parentQuestions = document.querySelector('.testpage__viewcontainer');
    var answersPoints = 0,
    prevAnswersPoints = 0,
    summPoints = 0;

    answers.forEach(item => item.addEventListener('click', function() {
    	  prevAnswersPoints = answersPoints;
          answersPoints = Number(this.getAttribute('data-points'));
          const sliderRunner = document.querySelector('.slider-runner');
          var sliderRunnerStyle = window.getComputedStyle(sliderRunner);
          var sliderRunnerLeft = sliderRunnerStyle.getPropertyValue('left');
          var sliderRunnerLeftNumber = Number(sliderRunnerLeft.slice(0, sliderRunnerLeft.length-2));
          var widthPanelItem = document.querySelector('.panelanswers__item').clientWidth;

    window.addEventListener('resize', function(){
	    widthPanelItem = document.querySelector('.panelanswers__item').clientWidth;
    });
          summPoints = summPoints + answersPoints;
    
          if(answersPoints == 0 || summPoints < 0){ 
           if (summPoints < 0){
           	summPoints = 0;
           }
          }
          // move right
          else if (answersPoints > 0 ){
            sliderRunner.style.left = `${sliderRunnerLeftNumber + widthPanelItem+ 2}px`;

            // red color
            document.querySelector('.panelanswers__item.current').classList.add('active');
            document.querySelector('.panelanswers__item.current').nextSibling.classList.add('current');
            document.querySelector('.panelanswers__item.current').classList.remove('current');
          }
          // move left
          else {
               sliderRunner.style.left = `${sliderRunnerLeftNumber - widthPanelItem - 10}px`;
             // red color
            document.querySelector('.panelanswers__item.current').previousSibling.classList.remove('active');
            document.querySelector('.panelanswers__item.current').previousSibling.classList.add('current');
            document.querySelectorAll('.panelanswers__item.current')[1].classList.remove('current');

          }

		  console.log(prevAnswersPoints, 'prevAnswersPoints');
		  console.log(answersPoints, 'answersPoints');
          console.log(summPoints, 'summPoints');

          let parentPage = findParent(this, 'testpage__child');
          window.parentPageIndex = parseInt(parentPage.getAttribute('data-index'));
          parentPage.classList.remove('active');

          if(window.parentPageIndex == 4) {
             document.querySelector('.panelanswers').classList.add('hide');
             document.querySelector('.results').classList.add('active');
             
             if(summPoints == 8){
             	document.querySelector('.result[data-key="0"]').classList.add('active');
             }
             else if(summPoints == 6){
             document.querySelector('.result[data-key="1"]').classList.add('active');
             }
             else if(summPoints == 4){
             document.querySelector('.result[data-key="2"]').classList.add('active');
             }
             else if (summPoints == 2){
             document.querySelector('.result[data-key="3"]').classList.add('active');
             }
             else{
             document.querySelector('.result[data-key="4"]').classList.add('active');
             }
          }
          else {
          parentQuestions.querySelectorAll('.testpage__child')[window.parentPageIndex+1].classList.add('active');
          }
    }));

     function findParent(el, classname) {
      var elem = el; 
      while(!elem.classList.contains(classname)) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
       }
     return elem; 
    }

});

export default Answers;