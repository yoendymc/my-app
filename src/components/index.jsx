import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
//import uid from 'uid'
//import $ from 'jquery'

import 'pure-css/lib/menus.css'
import './index.css'
import LogoPhp from '../components/media/logo.png'
import Home from './pages/'
import About from './pages/About'
import DashboardCursos from './pages/protected/'
import Register from './pages/Register'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import {
    logout,
    isLogued,
    incluirExterno
} from './helpers/Auth'

const PrivateRoute = ({ component: C, authed, rest }) => (

    <Route
        {...rest}
        render={
            props => authed === true
                ? <C {...props} />
                :  <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
    />
)
const PublicRoute = ({ component: Component, authed, rest }) => (
    <Route
        {...rest}
        render={props=>authed?<Redirect to='/cursos'/>:<Component {...props} />
    
        }
    />
)

class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            authed:false,
            loading: true
        }
        this.handleOnClick = this.handleOnClick.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

    }
    handleOnClick(e) {
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
        document.getElementById('toggle').classList.toggle('x')
    }
    onAuthChange(){
        //console.info(this)
        this.setState({loading:false, authed:isLogued()})
    }

    componentDidMount() {
        this.setState({loading:false, authed:isLogued()})
        incluirExterno({fn:this.onAuthChange, escope:this})

    }
    componentWillUnmount() {//destruye seccion
        this.onAuthChange()

    }

    render() {
        return this.state.loading === true
            ? <h1>Cargando...</h1>
            : (
                <Router>
                    <div>
                        <header className="custom-menu-wrapper">
                            <div className="pure-menu custom-menu custom-menu-top">
                                <a href="#" className="pure-menu-heading custom-menu-brand">
                                    <img className="principal-logo" src={LogoPhp} alt="Lerning" />
                                </a>
                                <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
                            </div>
                            <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                                <div className="custom-menu-screen"></div>
                                <ul className="pure-menu-list">
                                    <li className="pure-menu-item">
                                        <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                                    </li>
                                    <li className="pure-menu-item">
                                        <Link to="/acerca" className="pure-menu-link" onClick={this.handleOnClick}>Acerca</Link>
                                    </li>
                                    {
                                        this.state.authed
                                            ?
                                            <span>
                                                <li className="pure-menu-item">
                                                    <Link to="/cursos" className="pure-menu-link" onClick={this.handleOnClick}>Cursos</Link>
                                                </li>
                                                <li className="pure-menu-item">
                                                    <Link to="/logout" className="pure-menu-link"
                                                        onClick={() => {
                                                            logout()
                                                            this.setState({authed:false})
                                                            this.handleOnClick()
                                                        }}>LogOut</Link>
                                                </li>
                                            </span>
                                            :
                                            <span>
                                                <li className="pure-menu-item">
                                                    <Link to="/registro" className="pure-menu-link" onClick={this.handleOnClick}>Registro</Link>
                                                </li>
                                                <li className="pure-menu-item">
                                                    <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                                                </li>
                                            </span>
                                    }

                                </ul>
                            </div>
                        </header>
                        <main className="Main">
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/acerca' component={About} />
                                <PublicRoute authed={this.state.authed} path='/Registro' component={Register} />
                                <PrivateRoute authed={this.state.authed} path='/logout' />
                                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                                <PrivateRoute authed={this.state.authed} path='/cursos' component={DashboardCursos} />
                                <Route component={Error404} />
                            </Switch>

                        </main>
                    </div>
                </Router>
            )
    }
}

export default App