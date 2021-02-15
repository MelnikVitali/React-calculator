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
    //font-size: 62.5%;
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
    --color-dark-gray: #808080;

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
    --border-black: 1px solid #000000;
    --border-orange: 1px solid #FF9900;
    --border-gray: 2px solid var(--color-dark-gray);
    --border-white: 2px solid var(--color-white);
  }

  /* Layout */
  .app {
    min-height: 100vh;
    background-color: var(--background-color-app);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Calculator */
  .calculator {
    min-width: 360px;
    max-width: 395px;
    width: 100%;
    padding:22px;
    border: var(--border-black);
    box-shadow: 0 32rem 64rem var(--shadow);
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
    min-height: 100px;
    padding: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--color-white);;
    color: var(--color-black);
    border: var(--border-black);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }

  .computation-screen {
    min-height: 44px;
    font-size: 33px;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .result-screen {
    font-size: 24px;
    color: var(--color-gray);
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  /* Keypad */
  .keypad {
    width: 100%;
    padding-top: 15px;
    flex-grow: 1;
    flex-flow: column nowrap;
  }

  .keypad-row {
    display: flex;
    justify-content: space-between;
  }

  /* Button */
  .btn {
    height: 64px;
    width: 66px;
    margin: 10px;
    font-size: 18px;
    font-weight: 700;
    font-family: inherit;
    background-color: var(--color-white);
    border: var(--border-black);
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

    &:hover .arrow_box:before {
      border-color: var(--color-white);
    }

    &:hover .arrow_box:after {
      border-color: var(--color-white);
    }

    &:active {
      transform: scale(.95);
    }.
  }

  .btn-large {
    width: 154px;
    height: 64px;
    background-color: var(--color-orange);

    &:hover {
      color: var(--color-light-white);
      background-color: var(--color-blue);
    }
  }

  .btn-clear__entry {
    color: var(--color-dark-gray);
    font-weight: 300;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  .arrow_box {
    position: relative;
    padding-right: 7px;
    font-size: 29px;
    display: flex;
    align-items: center;
  }

  .arrow_box:before {
    content: "";
    width: 19px;
    height: 19px;
    position: absolute;
    top: 12px;
    right: 22px;
    border-top: var(--border-gray);
    border-left: var(--border-gray);
    transform: rotateZ(-45deg);
  }

  .arrow_box:after {
    content: "";
    position: absolute;
    top: 8px;
    right: -3px;
    width: 34px;
    height: 27px;
    border: var(--border-gray);
    border-left: none;

    &:hover {
      border: var(--border-white);
      border-left: none;
    }
  }

  .btn-primary {
    background-color: var(--color-gray);
  }

  .btn-operator {
    border: var(--border-orange);
  }
`;

export default GlobalStyle;
