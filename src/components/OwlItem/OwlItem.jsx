import React from 'react';

const OwlItem = ({imgsrc}) => {
	console.log(imgsrc, 'imgsrc')
    return (
        <div className="owlitem">
            <img src={imgsrc.competitor}/>
        </div>
    );
};

export default OwlItem;