import { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import Cookies from 'js-cookies'

import './index.css'

class Login extends Component{
    constructor(){
        super()
        const token = Cookies.getItem('token')
      
        this.state = {mail:'' , password:'' , errorMessage:'' , token}
    }
    

    changeMail = (e)=>{
        this.setState({mail:e.target.value})
    }

    changePassword=(e)=>{
    this.setState({password:e.target.value})
    }

    checkCredentials = ()=>{
        const {mail , password} = this.state 
        
        if(mail !== 'sample@greendzine.com' ){
            this.setState({errorMessage:'Your mail is wrong' , mail:'' , password:''})
        }
        else if(  password !== 'password@greendzine.com'){
            this.setState({errorMessage:'Your password is wrong' , mail:'' , password:''})
        }

        else{
            this.setState({errorMessage:'' , mail:'' , password:'' , token:'password@greendzine.com'})
            Cookies.setItem('token' , 'password@greendzine.com' , {expires:1})
            console.log('credentials are correct')
        }
    }

    render(){
        const {mail , password , errorMessage , token} = this.state
        if(token !== null){
           return  <Redirect to='/' />
        }
        return <form className="login-background text-light vh-100 d-flex flex-column justif-content-center align-items-center "  onClick={(e)=>{e.preventDefault()}}>
            <img src='https://res.cloudinary.com/dujknj4ka/image/upload/v1700278957/Group_3_tjcxb6.png' alt='greendzine logo' />
            <p>We are Electric</p>
            <input className="bg-dark text-light p-1 login-input" type='email' placeholder="E-mail" value={mail} onChange={this.changeMail} /> <br/>
            <input  className="bg-dark text-light p-1"  type='password' placeholder="Password" value={password} onChange={this.changePassword} /> <br/>
            <p className={ (errorMessage ==='') ? 'd-none' : ''}>{errorMessage}</p>
            <button type='button' onClick={this.checkCredentials}> Submit</button>
            <p>Forgot Password?</p>
            <p>credentials are email: sample@greendzine.com password:password@greendzine.com</p>
        </form>
    }
}

export default Login