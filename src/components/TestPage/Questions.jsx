import React from 'react';

const Questions = ({question, qnum, points}) => {
    return (
    <div className='question' data-points={points}>
       <span className ='question__qnum'>{qnum}</span>
       <div className ='question__title'>{question}</div>
    </div>
);
};
// document.addEventListener('DOMContentLoaded', () => {
// var parentPageIndex1 = parseInt(findParent(this, 'testpage__child').getAttribute('data-index'));
//  function findParent(el, classname) {
//       var elem = el;
//       while(!elem.classList.contains(classname)) {
//         if(elem.tagName.toLowerCase() == 'html') return false;
//         elem = elem.parentNode;
//        }
//      return elem; 
//     }
// });  

export default Questions;

