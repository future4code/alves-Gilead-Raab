import React from 'react'
import GlobalState from './Global/GlobalState';
import { Router } from './Routes/Router';
import { Body } from './Styles/styled';

const App = () => {
  return (
    <GlobalState>
      <Body>
        <Router/>
      </Body>
    </GlobalState>
  );
}

export default App;