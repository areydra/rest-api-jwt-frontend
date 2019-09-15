import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from './Components/Auth/login'
import Provinces from './Components/provinces'

import store from './Publics/Redux/store'

class App extends Component {
  render() { 
    return (
      <Router>
        <Provider store={store}>
          <Route path="/login" component={Login} />
          <Route path="/provinces" component={Provinces} />
        </Provider>
      </Router>
    );
  }
}
 
export default App;
