import React from 'react';
import styled from 'styled-components';

import Calculator from './layout/Calculator';

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: var(--background-color-app);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
    return (
        <StyledApp >
            <Calculator />
        </StyledApp >

    );
}

export default App;
