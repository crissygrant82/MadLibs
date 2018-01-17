import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

import MadLibs1 from './MadLib1';
import MadLib2 from './MadLib2';
import MadLib3 from './MadLib3';
import MadLib4 from './MadLib4';


const Nav = props => (
    <div>
      <h3 className="header">
        Select Your Mad Lib:
    </h3>
      <div className="listOfLibs">
        <ul className="daList">
          <li>
            <Link to="/MadLibs/madLib1">MAd lib #1</Link>
          </li>
          <li>
          <Link to="/MadLibs/MadLib2">MAd lib #2</Link>
          </li>
          <li>
          <Link to="/MadLibs/MadLib3">MAd lib #3</Link>
          </li>
          <li>
          <Link to="/MadLibs/MadLib4">MAd lib #4</Link>
          </li>
        </ul>
      </div>
      </div>
  )

class MadLibs extends React.Component {



        render(){
      return (


      <Switch>
          <Route exact path="/MadLibs" component={Nav} />
          <Route path="/MadLibs/madLib1" component={MadLibs1} />
        <Route path="/MadLibs/madLib2" component={MadLib2} />
        <Route path="/MadLibs/madLib3" component={MadLib3} />
        <Route path="/MadLibs/madLib4" component={MadLib4} />

      </Switch>
      )
  }

  
}


export default MadLibs;
