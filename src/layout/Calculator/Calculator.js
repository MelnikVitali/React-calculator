import React, { useState } from 'react';

import Screen from "./Screen";
import Keypad from "./Keypad";

const Calculator = () => {
    // const initialState = {
    //     equation:'',
    //     result: 0
    // };
    // const [state, setState] = useState(initialState);

    const [lastOperation, setLastOperation] = useState('');
    const [currentNumber, setCurrentNumber] = useState('0');
    const [operatorFlag , setOperatorFlag] = useState(false);
    const [decimalFlag, setDecimalFlag] = useState(false);

    const onButtonPress = event => {
        // let equation = state.equation;
        const buttonValue = event.target.innerHTML;

        console.log('pressedButton', buttonValue);

        switch (buttonValue) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': {
                if (currentNumber !== '0') {
                    setCurrentNumber(currentNumber + buttonValue);
                    setOperatorFlag(false);
                } else {
                    setCurrentNumber(buttonValue);
                }
                break;
            }
            case '*':
            case '+':
            case '-':
            case '/':
            case '%': {
                if (!operatorFlag) {
                    setCurrentNumber(currentNumber + buttonValue);
                    setOperatorFlag(buttonValue);
                } else {
                    const newNumber = currentNumber.slice(0, currentNumber.length - 1);
                    setCurrentNumber(newNumber + buttonValue);
                }
                break;
            }
            case 'AC':
                setLastOperation('');
                setCurrentNumber('0');
                break;
            case '=':
                setLastOperation(currentNumber);
                const result = currentNumber.includes('.') ? eval(currentNumber).toFixed(2) : eval(currentNumber);
                setCurrentNumber(result);

                break;
            case '.':
                if ((!currentNumber.includes('.') || buttonValue !== '.') && currentNumber.length < 8) {
                    setCurrentNumber(`${(currentNumber + buttonValue).replace(/^0+/, '')}`);
                }
                if (!decimalFlag) {
                    setCurrentNumber(currentNumber + '.');
                    setDecimalFlag(true);
                }
                break;
            case '←':
                const newNumber = currentNumber.length > 1 ? currentNumber.slice(0, currentNumber.length - 1) : '0';
                setCurrentNumber(newNumber);
                break;
            default:
                break;
        }
    };




    //     if (pressedButton === 'C') return clear();
    //     else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.'){
    //         equation += pressedButton;
    //     }
    //     else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1){
    //         equation += ' ' + pressedButton + ' ';
    //
    //     }
    //     else if (pressedButton === '=') {
    //         try {
    //             // const evalResult = eval(equation);
    //             const newResult = Number.isInteger(equation) ? equation : equation.toFixed(2);
    //             setState({ ...state, result: newResult });
    //             console.log('newResult', newResult);
    //         } catch (error) {
    //             alert('Invalid Mathematical Equation');
    //         }
    //     } else {
    //         equation = equation.trim();
    //         equation = equation.substr(0, equation.length - 1);
    //     }
    //     setState({...state, equation:equation });
    //
    //     console.log(state);
    // }
    // const clear = () => {
    //     setState({ equation: '', result: 0 });
    // }

    return (
        <main className="calculator" >
            <Screen equation={currentNumber} result={lastOperation} />
            <Keypad onButtonPress={onButtonPress} />
        </main >
    );
}

export default Calculator;