import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Manager from './pages/ManagerPage'
import Employee from './pages/EmployeePage'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/manager' component={Manager}/>
          <Route path='/employee' component={Employee}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
