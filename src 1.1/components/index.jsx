import React, { Component, PropTypes } from 'react'
import ListaCursos from './ListaCursos'
import ListaAddForm from './ListAddForm'
class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            cursos: [
                { id: 1, nombre: 'React desde cerapio', profesor: 'yoendy' },
                { id: 2, nombre: 'Angular desde cerapio', profesor: 'enyesao' }
            ]
        }
        this.handleOnAddCurso = this.handleOnAddCurso.bind(this)
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
    render() {

        return (
            <div>
            <ListaAddForm onAddCurso = {this.handleOnAddCurso} />
            <ListaCursos cursos={this.state.cursos} />
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