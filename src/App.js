import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' component={SignUp}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
