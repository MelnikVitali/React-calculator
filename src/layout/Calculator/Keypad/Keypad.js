import React from 'react';

import KeypadRow from "./KeypadRow";
import Button from "../../../components/Button";
import LargeButton from "../../../components/Button/LargeButton";

const Keypad = ({onButtonPress}) => {
    return (
        <section className="keypad" >
            <KeypadRow>
                <Button type="primary" onButtonPress={onButtonPress}>AC</Button>
                <Button onButtonPress={onButtonPress}>&larr;</Button>
                <Button onButtonPress={onButtonPress}>%</Button>
                <Button type="operator" onButtonPress={onButtonPress}>/</Button>
            </KeypadRow>

            <KeypadRow>
                <Button onButtonPress={onButtonPress}>9</Button>
                <Button onButtonPress={onButtonPress}>8</Button>
                <Button onButtonPress={onButtonPress}>7</Button>
                <Button  type="operator" onButtonPress={onButtonPress}>*</Button>
            </KeypadRow>

            <KeypadRow>
                <Button onButtonPress={onButtonPress}>6</Button>
                <Button onButtonPress={onButtonPress}>5</Button>
                <Button onButtonPress={onButtonPress}>4</Button>
                <Button type="operator" onButtonPress={onButtonPress}>-</Button>
            </KeypadRow>

            <KeypadRow>
                <Button onButtonPress={onButtonPress}>3</Button>
                <Button onButtonPress={onButtonPress}>2</Button>
                <Button onButtonPress={onButtonPress}>1</Button>
                <Button type="operator" onButtonPress={onButtonPress}>+</Button>
            </KeypadRow>

            <KeypadRow>
                <Button onButtonPress={onButtonPress}>0</Button>
                <Button onButtonPress={onButtonPress}>.</Button>
                <LargeButton onButtonPress={onButtonPress}>=</LargeButton>
            </KeypadRow>
        </section>
    );
};

export default Keypad;
