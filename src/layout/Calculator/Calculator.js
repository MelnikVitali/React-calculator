import React, { useState } from 'react';
import { evaluate} from 'mathjs';

import Screen from "./Screen";
import Keypad from "./Keypad";

const Calculator = () => {

    // Calculator's states
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState('0');
    const [operator, setOperator] = useState(null);

    console.log('operator', operator);
    console.log('result', result);
    console.log('equation', equation);

    const onDigitButtonClick = (value) => {
        if (operator !== null) {
            let newEquation = equation + value;
            console.log('newEquation', newEquation);
            const newResult = evaluate(newEquation);

            setEquation(newEquation);
            setResult(newResult);
        } else {
            setEquation(equation + value);
            setOperator(value);
        }
    };
    const onOperatorButtonClick = (value) => {
        setEquation(equation + value);
        setOperator(value);
    };

    const onEqualButtonClick = (value) => {
        setEquation(equation + value);
        setEquation(result);
        setResult('');
        setOperator(null);
    };

    const onAllClearButtonClick = () => {
        setEquation('');
        setResult(0);
        setOperator(null);
    };

    const onClearEntryButtonClick = () => {
        setEquation(equation.slice(0, -1));
    };

    const onButtonPress = event => {
        const buttonValue = event.target.innerHTML;

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
            case '9':
                return onDigitButtonClick(buttonValue);

            case '*':
            case '+':
            case '-':
            case '/':
            case '.':
            case '%':
                return onOperatorButtonClick(buttonValue);

            case 'AC':
                return onAllClearButtonClick();

            case '=':
                return onEqualButtonClick(buttonValue);


            // return onPointButtonClick();

            case '×':
                return onClearEntryButtonClick();
            default:
                break;
        }
    };

    // const onButtonPress = event => {
    //     let newEquation = equation;
    //     const pressedButton = event.target.innerHTML;
    //     console.log('pressedButton', pressedButton);
    //
    //     if (pressedButton === 'AC') return clear();
    //     else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') newEquation += pressedButton;
    //     else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) newEquation += ' ' + pressedButton + ' ';
    //     else if (pressedButton === '=') {
    //         try {
    //             const evalResult = eval(newEquation);
    //             const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
    //             setResult(result);
    //
    //         } catch (error) {
    //             alert('Invalid Mathematical Equation');
    //         }
    //     } else {
    //         newEquation = equation.trim();
    //         newEquation = equation.substr(0, equation.length - 1);
    //     }
    //
    //     setEquation(newEquation);
    // }

    // const clear = () => {
    //     setEquation('');
    //     setResult(0);
    // }

    return (
        <main className="calculator" >
            <Screen
                equation={equation}
                result={result}
            />
            <Keypad onButtonPress={onButtonPress} />
        </main >
    );
}

export default Calculator;