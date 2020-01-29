import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import {Route, Switch} from 'react-router-dom';
import Navigation from './views/Navigation';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Footer from './views/Footer';


function App() {
  return <>
  <Navigation/>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/rooms/" component={Rooms} />
  <Route exact path="/rooms/:roomName" component={SingleRoom} />
  <Route exact path="/sign-in" component={Login} />
  <Route exact path="/sign-up" component={Registration} />
  <Route component={Error} />
  </Switch>
  <Footer />
  </>
}

export default App;
