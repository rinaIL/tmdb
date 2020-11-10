import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";

class App extends React.Component {
 
  render() {
        return (  
          <Router> 

              <Switch>
                  <Route exact path="/"><Home></Home></Route>

              </Switch>
          </Router>        
       
        );
  }

}

export default App;
