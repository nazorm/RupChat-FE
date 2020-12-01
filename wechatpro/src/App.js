import React from "react";
import Signup from "./Signup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Profile from "./pages/Profile";
import Account from './pages/Account';
import ChatRoom from './pages/ChatRoom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }



 

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
    component={Signup}
            />
            <Route
              exact
              path="/Login"
              component={Login}
            />
            <Route exact path = "/pages/Profile" component = {Profile}/>
            <Route exact path = "/pages/Account" component = {Account}/>
            <Route path ="/pages/chatroom/:id" component={ChatRoom}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
