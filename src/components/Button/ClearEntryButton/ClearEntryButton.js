import React from 'react';

import Button from "../Button";

const ClearEntryButton = (props) => {
    return (
        <Button type='clear__entry' {...props} >
            <div className='arrow_box'>&#215;</div >
        </Button >
    );
};

export default ClearEntryButton;
