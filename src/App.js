import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import MovieInfo from "./components/MovieInfo";
import MovieState from "./context/movie/MovieState";


import './App.css';
// import { GlobalProvider } from "./context/GlobalState";

const App = () => {
    


    return (

       <>
            <MovieState>
                <Router>
                    <Navbar />

                    <Switch>
                    
                        <Route exact path="/">
                            <Home />
                        </Route>

                       

                        <Route exact path="/search" component={Search}></Route>

                        <Route exact path="/movie/:id" component={MovieInfo}></Route>

                    </Switch>
                </Router>
            </MovieState>
        

       </>
    )
}

export default App
