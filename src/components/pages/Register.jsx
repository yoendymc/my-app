import React, { Component } from 'react'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import '../pages/css/login-register.css'
import {
    isLogued,
    saveUser
} from '../helpers/Auth'

export default class Register extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            loginMessage:null
        }
        this.setMessage = this.setMessage.bind(this)
        this.onHandlerClick = this.onHandlerClick.bind(this)
        
    }
    
    onHandlerClick(v){
        v.preventDefault()
        
        if(this.cpass.value !== this.pass.value)
        {
            this.setMessage("Las contraseñas no coinciden")
            return
        }        
        else
        saveUser(this.email.value, this.pass.value) 

        
        if(isLogued())        
        this.setMessage("Usuario registrado") 
        else
        this.setMessage("Ocurrio un error")
        

    }
    setMessage(err){
        this.setState({loginMessage:err})
        return true
    }
    render(){
        return (
            <article className = "Main-container">
            <h1>Registro de usuarios</h1>
            
            <form className="pure-form AuthForm" onSubmit={this.onHandlerClick} >
            <input type="email" name="email" placeholder="Email" ref={email => this.email =email}/>
            <input type="password" name="pass" placeholder ="password" ref={pass => this.pass =pass}/>
            <input type="password" name="cpass" placeholder ="repit password" ref={cpass => this.cpass =cpass}/>
            {
                this.state.loginMessage && 
                <div className = "u-error">
                    <p>
                        Error:&nbsp;&nbsp; {this.state.loginMessage}&nbsp;
                        
                    </p>
                </div>
            }
            <input type="submit" className="pure-button pure-button-primary" value="Registrar"/>
            </form>
            </article>
        )
    }
}