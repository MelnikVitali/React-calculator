import React, { useState } from 'react';

import Screen from './Screen';
import Keypad from './Keypad';

import { calculate } from '../../utils/calculate';

const Calculator = () => {
    // Calculator's states
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);
    const [pressEquals, setPressEquals] = useState(false);

    const onDigitButtonClick = (value) => {
        if ((equation === '0' && value === '0')) {
            return false;
        }

        if (pressEquals) {
            setEquation(value);
            setResult(Number(value));
            setPressEquals(false);
        } else {
            let newEquation = equation + value;
            const newResult = calculate(newEquation);

            setEquation(newEquation);
            setResult(newResult);
        }
    };

    const onOperatorButtonClick = (value) => {
        let newEquation = equation;

        if ((/^[*+-\/]/.test(newEquation.slice(-1)))) {
            return false;
        }

        if (equation === '') {
            newEquation += '0';
        }

        setPressEquals(false);
        setEquation(newEquation + value);
    };

    const onPercentButtonClick = () => {
        if (!equation) {
            return false;
        }

        const arrNumbersForEquation = equation.match(/\d+/g);
        const afterNumber = arrNumbersForEquation[arrNumbersForEquation.length - 1];
        const percentOfNumber = String(Number(afterNumber) / 100);
        const indexAfterNumber = equation.lastIndexOf(afterNumber);
        const newEquation = equation.slice(0, indexAfterNumber);
        const calculatePrevResult = calculate(newEquation);
        const calculateNewResult = String(Number(calculatePrevResult) * percentOfNumber);

        if ((/^[+-]/.test(newEquation.slice(-1)))) {
            const newResult = newEquation + calculateNewResult;

            setEquation(newResult);
            setResult(calculate(newResult));
            setPressEquals(false);
        } else if ((/^[*\/]/.test(newEquation.slice(-1)))) {
            const newResult = newEquation + percentOfNumber;

            setEquation(newResult);
            setResult(calculate(newResult));
            setPressEquals(false);
        } else {
            return false;
        }
    };

    const onPointButtonClick = () => {
        let newEquation = equation;

        if (pressEquals) {
            newEquation = '0';
            setResult(0);
            setPressEquals(false);
        }

        if (newEquation === '') {
            newEquation = newEquation + '0';
        }
        if ((/^[*+\/]/.test(newEquation.slice(-1)))) {
            newEquation = newEquation + '0'
        }
        if ((/^[.]/.test(newEquation.slice(-1)))) {
            return false;
        }

        setEquation(newEquation + '.');
        setResult(calculate(newEquation + '.'));
        setPressEquals(false);
    };

    const onEqualButtonClick = () => {
        if (typeof result !== 'string') {
            setEquation(String(result));
            setResult('');
            setPressEquals(true);
        }
    };

    const onAllClearButtonClick = () => {
        setEquation('');
        setResult(0);
        setPressEquals(false);
    };

    const onClearEntryButtonClick = () => {
        const newEquation = equation;

        if (equation.trim().length <= 1) {
            setResult(0);
            setEquation('');
            setPressEquals(false);
        } else {
            newEquation.split('')
                .slice(0, newEquation.length - 1)
                .join('');

            setEquation(newEquation.slice(0, -1));
            setResult(calculate(newEquation.slice(0, -1)));
            setPressEquals(false);
        }
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

                return onOperatorButtonClick(buttonValue);

            case '%':
                return onPercentButtonClick();

            case '.':
                return onPointButtonClick();

            case 'AC':
                return onAllClearButtonClick();

            case '=':
                return onEqualButtonClick(buttonValue);

            case '×':
                return onClearEntryButtonClick();

            default:
                break;
        }
    };

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
