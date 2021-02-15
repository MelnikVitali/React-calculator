import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const Screen = ({ result, equation }) => (
    <section className="screen-container" >
        <div className='screen' >
            <ComputationScreen >{equation}</ComputationScreen >
            <ResultScreen >{result}</ResultScreen >
        </div >
    </section >
);
export default Screen;