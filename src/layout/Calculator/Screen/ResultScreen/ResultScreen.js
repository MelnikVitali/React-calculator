import React from 'react';

const ResultScreen = (props) => {
    return (
        <div
            className={props.children === 0 ? "result-screen__zero" : "result-screen"} >
            {props.children}
        </div >
    );
};

export default ResultScreen;
