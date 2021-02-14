import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    font-family: inherit;
  }

  /* Variables */
  :root {
    --color-white: #fff;
    --color-light-white: #eee;

    --color-gray: #CCCCCC;

    --color-tomato: #d40640;
    --color-purple-transparent: rgba(88, 24, 69, .9);
    --color-pink-transparent: rgba(216, 14, 91, .9);

    --color-orange: #FF9900;

    --color-light-black: #222;
    --color-black: #000;

    --color-light-blue: #2979ff;
    --color-blue: #3f51b5;
    --color-pink: #ed4b82;

    --background-color-app: #f6f6f8;
    --background-color-calculator: #CEE1F2;

    --shadow: rgba(0, 0, 0, .4);
    --borderBlack: 1px solid #000000;
    --borderOrange: 1px solid #FF9900;
  }

  /* Layout */
  .app {
    height: 100vh;
    width: 100%;
    background-color: var(--background-color-app);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Calculator */
  .calculator {
    height: 600px;
    min-width: 360px;
    max-width: 400px;
    padding: 2rem 2rem 3rem;
    border: var(--borderBlack);
    box-shadow: 0 2rem 4rem var(--shadow);
    background-color: var(--background-color-calculator);
    display: flex;
    flex-direction: column;
  }

  /* Screen */
  .screen-container {
    width: 100%;
    padding: 0 10px;
    
  }

  .screen {
    padding: 0 1.5rem;
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--color-white);;
    color: var(--color-black);
    border: var(--borderBlack);
  }

  .computation-screen {
    height: 10vh;
    font-size: 2.5rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .result-screen {
    height: 6vh;
    font-size: 2rem;
    color: var(--color-gray);
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  /* Keypad */
  .keypad {
    width: 100%;
    padding: 15px 0 20px;
    flex-grow: 1;
    flex-flow: column nowrap;
  }

  .keypad-row {
    height: 11vh;
    display: flex;
    justify-content: space-between;
  }

  /* Button */
  .btn {
    height: 59px;
    width: 59px;
    margin: 10px;
    font-size: 18px;
    font-weight: 700;
    font-family: inherit;
    background-color: var(--color-white);
    border: var(--borderBlack);
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;

    &:hover {
      color: var(--color-light-white);
      background-color: var(--color-blue);
    }

    &:active {
      transform: scale(.95);
    }
  }

  .btn-large {
    width: 50%;
    background-color: var(--color-orange);

    &:hover {
      background-color: var(--color-light-white);
      color: var(--color-tomato);
    }
  }

  .btn-primary {
    background-color: var(--color-gray);
  }

  .btn-operator {
    border: var(--borderOrange);
  }
`;

export default GlobalStyle;
