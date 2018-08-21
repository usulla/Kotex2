import React from 'react';
import test_girl0 from '../../images/test/test-girl1.png';
import test_girl1 from '../../images/test/test-girl2.png';
import test_girl2 from '../../images/test/test-girl3.png';
import test_girl3 from '../../images/test/test-girl4.png';
import test_girl4 from '../../images/test/test-girl5.png';
import './testpage.js';

const GirlImg = ({datasrc}) => {
	var srcImg;
	switch (String(datasrc)) {
            case '0': 
            srcImg = test_girl0;  
            break;
            case '1': 
              srcImg = test_girl1;  
                    break;
            case '2': 
              srcImg = test_girl2;  
                    break;
            case '3': 
              srcImg = test_girl3;  
                    break;
             case '4': 
              srcImg = test_girl4;  
                    break;
             default: 
             srcImg = test_girl4;    
        }
    return (
    	<img src={srcImg}/>
)};
export default GirlImg;