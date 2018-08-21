import React from 'react';

const Button = ({text, classadd}) => {
    return (
        <div className={`button ${classadd}`}> {text} </div>
    );
};

export default Button;