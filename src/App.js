import React from 'react'
import Home from './comp/home'
import Welcome from "./comp/welcome";
import { useSelector } from "react-redux";




import './App.css';
import {
    BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    const load = useSelector(state => state.loader)

  return (
    <Router>
      <div className={
          load.loader ?
          'preloader' :
          ( load.done ? 'preloader active done' : 'preloader active')
      }>
        <div className="loading-mask"></div>
        <div className="loading-mask"></div>
        <div className="loading-mask"></div>
        <div className="loading-mask"></div>
        <div className="loading-mask"></div>
      </div>

      <Switch>
          <Route path="/welcome">
              <Welcome />
          </Route>

          <Route path="/">
              <Home />
          </Route>
      </Switch>


    </Router>
  );
}

export default App;
