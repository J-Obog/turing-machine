import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About'; 
import Examples from './pages/Examples'; 
import Simulation from './pages/Simulation';  
import NotFound from './pages/NotFound'; 

const App = () => {
    return (
        <Router>
            <Switch>  
                <Route exact path={["/", "/about"]} component={About}/>
                <Route exact path="/sim" component={Simulation}/>
                <Route exact path="/examples" component={Examples}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App; 