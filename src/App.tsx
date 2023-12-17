import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from "./redux/store/configureStore";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Park from "./components/park/park";
import Comment from "./components/comment/comment";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/park/:id" render={(routeProps: any) => {
              return (
                <Park {...routeProps} />
              )
            }} />
            <Route exact path='/comment' render={(routeProps: any) => {
              return(
                <Comment {...routeProps}/>
              )
            }} />
          </Switch>
        </div>
      </Router>
    </div>
    </Provider>
  );
}

export default App;