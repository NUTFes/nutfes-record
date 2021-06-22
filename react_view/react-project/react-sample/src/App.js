import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Top from './pages/Top.js';
import Member from './pages/Member';

const App = () => {
  return (
    <div className="App">
      <Header className="App-header" />
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Top} />
            <Route path="/members/:userId" component={Member} />
            {/* Not Found */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}


export default App;