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
import MovieDetails from "./components/MovieDetails/MovieDetails";

class App extends React.Component {
 
  render() {
        return (  
          <div className="main">
            <Router> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/movie/:id" component={MovieDetails}/>
                </Switch>
            </Router>        
          </div>
        );
  }

}

export default App;
