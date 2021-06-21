import React from "react";
import { Switch, Route } from "react-router-dom";
import About from './pages/About'; 
import Examples from './pages/Examples'; 
import Simulation from './pages/Simulation';  
import NotFound from './pages/NotFound'; 
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>  
                <Route exact path={["/", "/about"]} component={About}/>
                <Route exact path="/sim" component={Simulation}/>
                <Route exact path="/examples" component={Examples}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    );
}

export default App; 