import React, {Component} from 'react'
import {

    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter

} from 'react-router-dom'

const Home = () => <h3>Home</h3>
const Public = () => <h3>Contenido publico</h3>
const Protected = () => <h3>Contenido protegido</h3>
const AuthButton = withRouter( ({history})=>(
    (fackeAuth.isAuthenticate)
    ?
    <div>
        <h2>Bienvenid@! :)</h2>
        <button onClick = {()=>fackeAuth.singouth( ()=> history.push('/') )}>Salir</button>
    </div>
    :
    <h2>No estas logueado ! :(</h2>

) )
const PrivateRoute = ({component:Component, rest}) =>(
    
    <Route {...rest} render = { (props)=>(
        fackeAuth.isAuthenticate
        ?<Component {...props}/>
        :<Redirect to={ {pathname:'/login', state:{from:props.location}} }/>
    ) }/>
)
const fackeAuth = {
    isAuthenticate:false,
    authenticate(cb){
        this.isAuthenticate  = true
        setTimeout(cb, 100)
    },
    singouth(cb){
        this.isAuthenticate  = false
        setTimeout(cb, 100)
    }
}
class Login extends Component {
    constructor(...props){
        super(...props)
        this.state = {
            redirectRoute:false
        }
        this.login  = this.login.bind(this)
    }

    login(){
        fackeAuth.authenticate( ()=>this.setState( {redirectRoute : true} ) )
    }

    render(){
        
        const { from } = this.props.location.state || {from:{pathname:'/'} }
        const { redirectRoute } = this.state
        if( redirectRoute ){
            return (<Redirect to={from}/>)
        }else{
            return (
                <div>
                    <h2>Debes estar logueado para ver esta pagina <mark>{from.pathname}</mark></h2>
                    <button onClick= {this.login}>Login</button>
                </div>
            )

        }

    }
}

const AuthSite = () =>(
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/public">Pagina publica</Link>
                </li>
                <li>
                    <Link to="/protected">Pagina protegida</Link>
                </li>
            </ul>
            <Switch>
                <Route path ="/" exact component = {Home}/>
                <Route path ="/public" component = {Public}/>
                <PrivateRoute path = "/protected" component = {Protected}/>
                <Route path ="/login" component = {Login}/>
            </Switch>
        </div>
    </Router>
)

export default AuthSite