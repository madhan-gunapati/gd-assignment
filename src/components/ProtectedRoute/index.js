import { Component } from "react";


import { Switch , Route  } from "react-router-dom/cjs/react-router-dom.min";

import Cookies from 'js-cookies'

import Home from '../Home';



import Details from '../Details';



import NotFound from '../NotFound';

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class ProtectedRoute extends Component{
constructor(){
    super()
    
    const token = Cookies.getItem('token')
    
    this.state={token}
}

 render(){
    const {token} = this.state 
    if(token === null){
        return <Redirect to='/login' />
    }
   return <Switch>
    <Route exact path='/'  component = {Home  } />
 <Route exact path='/details' component={Details } />
 <Route exact path='/notfound' component={NotFound} />
 <Route path='' component={()=><Redirect to='/notfound' />} />
   </Switch>
 }   
}

export default ProtectedRoute

