import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Notifications from 'react-notify-toast';

//import components
import LogIn from './components/auth/logIn.component';
import SignUp from './components/auth/signUp.component';
import ForgotPassword from './components/auth/forgotPassword.component';
import ItemsView from './components/items/itemsView.component';
import ListView from './components/lists/listView.component';
import ResetPassword from './components/auth/resetPassword.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Switch>

          <Route exact path='/' component={SignUp} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={SignUp} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <Route exact path='/resetpassword' component={ResetPassword} />
          <Route exact path='/items/:list_id' component={ItemsView} />
          <Route exact path='/lists' component={ListView} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
