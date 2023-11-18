import {BrowserRouter , Switch , Route   } from 'react-router-dom'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute';

import './App.css';



const App = ()=> <div>
                    <BrowserRouter>
 
                          <Switch >
                              <Route exact path='/login'  component = {Login  } />
                              <Route component={ProtectedRoute} />
 
                          </Switch>
 
                    </BrowserRouter>
                  </div>
export default App;
