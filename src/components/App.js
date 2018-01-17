import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import 'style.css';

import Home from './Hello';
import MadLibs from './MadLibs';



class App extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/MadLibs">Mad Libs</Link>{" "}

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MadLibs" component={MadLibs} />


    </Switch>


      </div>
    )
  }
}

export default App;
