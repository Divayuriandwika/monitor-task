import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Manager from './pages/ManagerPage'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/manager' component={Manager}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
