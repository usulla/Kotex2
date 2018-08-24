import React from 'react';
import $ from 'jquery';

const PlayBtn = ({iframesrc, classadd}) => {
	
    return (
        <span className={`clickplay ${classadd}`} data-src={iframesrc}>
            <i className="far fa-play-circle"></i>
        </span>
    );
};

 

export default PlayBtn;