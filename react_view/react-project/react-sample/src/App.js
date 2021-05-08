import React, { useEffect, useRef, useState } from "react";
import './App.css';
import CenteredTabs from './pages/CenteredTabs.js';
import Header from './components/Header.js'
import Title from './pages/Title.js'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <body>
        <Title />
        <CenteredTabs labels={['students', 'Teachers']}>
          <div>aa</div>
          <div>bb</div>
        </CenteredTabs>
      </body>
    </div>
  );
}

export default App;
