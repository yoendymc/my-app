import React, { Component, PropTypes } from 'react'
import {cursos} from '../Data/cursos.json'
import ListaCursos from './ListaCursos'
import ListaAddForm from './ListAddForm'
class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            cursos: []
        }
        this.handleOnAddCurso = this.handleOnAddCurso.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)
    }
    handleOnAddCurso(e) {
        //alert('evento react')
        e.preventDefault()
        let form = e.target,
        curso = {
            id:form.id.value,
            nombre:form.nombre.value || App.defaultProps.nombre,
            profesor:form.profesor.value || App.defaultProps.profesor
        }
        this.setState({
            cursos:this.state.cursos.concat([curso])
        })
        form.reset()
    }

    fetchData(){
        setTimeout(()=> this.setState({ cursos:cursos }), 2000)
    }

    resetData(){
        this.setState( {cursos:[]} )
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        if( !this.state.cursos.length ){
            return(
                <div>
                    <p>No hay Cursos, vuelva luego....:(</p>
                    <button onClick = {this.fetchData}>Cargar cursos</button>
                </div>
            )
        }
        return (
            <div>
            <ListaAddForm onAddCurso = {this.handleOnAddCurso} />
            <ListaCursos cursos = {this.state.cursos} />
            <button onClick = {this.resetData}>Recargar cursos</button>
            </div>
        )
    }
}

App.propTypes = {
    /*id:PropTypes.number.isRequired,
    nombre:PropTypes.string.isRequired ,
    profesor:PropTypes.string.isRequired */
}
App.defaultProps = {
    nombre:'Desconocido',
    profesor:'La manta negra'
}
export default App