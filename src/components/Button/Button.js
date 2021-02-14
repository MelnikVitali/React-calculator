import React from 'react';

const Button = ({ onButtonPress, type, children }) => {
    const classes = ['btn'];

    if ( typeof type !== 'undefined' )

        classes.push('btn-' + type);

    return (
        <button className={classes.join(' ')} onClick={onButtonPress}>
            {children}
        </button>
    );
};

export default Button;

