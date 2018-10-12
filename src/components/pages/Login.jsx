import React, { Component } from 'react'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import '../pages/css/login-register.css'
import {
    loginUser,
    isLogued,
    changePassword
} from '../helpers/Auth'

export default class Login extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            loginMessage:null
        }
        this.setMessage = this.setMessage.bind(this)
        this.onHandlerClick = this.onHandlerClick.bind(this)
        this.resetPassword = this.resetPassword.bind(this)
    }
    resetPassword(e){
        e.preventDefault()
        let cambio = changePassword(this.email.value, this.pass.value)
        cambio && this.setMessage("Se cambio el pass") || this.setMessage(`El correo ${this.email.value} no esta registrado`)
    }
    onHandlerClick(e){
        e.preventDefault()
        loginUser(this.email.value, this.pass.value)
        isLogued() || this.setMessage("Usuario o password incorecto")

    }
    setMessage(err){
        this.setState({loginMessage:err})
        return true
    }
    render(){
        return (
            <article className = "Main-container">
            <h1>Login</h1>
            
            <form className="pure-form AuthForm" onSubmit={this.onHandlerClick} >
            <input type="email" name="email" placeholder="Email" ref={email => this.email =email}/>
            <input type="password" name="pass" placeholder ="pass" ref={pass => this.pass =pass}/>
            {
                this.state.loginMessage && 
                <div className = "u-error">
                    <p>
                        Error:&nbsp;&nbsp; {this.state.loginMessage}&nbsp;
                        <a href="#" className="alert-link" onClick = {this.resetPassword}>Olvidaste tu password asao?</a>
                    </p>
                </div>
            }
            <input type="submit" className="pure-button pure-button-primary" value="Login"/>
            </form>
            </article>
        )
    }
}