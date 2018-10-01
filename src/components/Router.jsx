import React from 'react'
import {

    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter

} from 'react-router-dom'


const StaticSite = () => (
    <Router>
        <div>
        <h1>Sitio estatico</h1>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/acerca">Servicios</Link></li>
            <li><Link to="/servicios">Acerca</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        </nav>
        <hr/>
        <Route exact path="/" component = {Home}/>
        <Route path="/acerca" component = {Acerca}/>
        <Route path="/servicios" component = {Servicios}/>
        <Route path="/contacto" component = {Contacto}/>
        </div>
    </Router>


)

const Home = () => (
    <div>
        <p>Bienvenido a mi sitio estatico</p>
    </div>
)

const Acerca = () => (
    <div>
        <p>Probando como redireccionar un sitio con react router dom</p>
    </div>
)

const Servicios = () => (
    <ul>
        <li>Disenno web</li>
        <li>Programacion web</li>
    </ul>
)
const Contacto = ({match}) => (
    <div>
    <h2>Info de contacto</h2>
    <Route exact path={`${match.url}/:contactoinfo`} render = {infoContacto}/>

    <Route exact path={match.url} render = {()=>(

        <h3>contact yoendy</h3>
    )}  
    />
    <ul>
         <li>
            <Link to ={`${match.url}/web`}>Sitio Web</Link>
        </li>
        <li>
            <Link to ={`${match.url}/correo`}>Correo</Link>
        </li>
        
    </ul>
    <Route path = {`${match.url}/correo`} render = {()=>(
        <div>
            <a href  = "mailto:yoendymc@gmail.com" target = "_blanck">yoendy@gmail.com</a>
        </div>
    )}/>
    <Route path = {`${match.url}/web`} render = {()=>(
        <div>
            <a href  = "http://yoend.com" target = "_blanck">yoendy.com</a>
        </div>
    )}/>
    </div>
)

const infoContacto = ( {match} ) =>(
    <div>
        <h4>{ match.params.contactoinfo }</h4>
    </div>
)
export default StaticSite