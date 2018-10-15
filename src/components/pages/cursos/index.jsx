import React, { Component, PropTypes } from 'react'
import {cursos, categories, teachers} from '../../../Data/index'
import ListaCursos from './ListaCursos'
import ListaAddForm from './ListAddForm'
class Cursos extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            cursos: cursos
        }
        this.handleOnAddCurso = this.handleOnAddCurso.bind(this)
        
    }
    handleOnAddCurso(e) {
        //alert('evento react')
        e.preventDefault()
        let form = e.target,
        curso = {
            id:form.id.value,
            name:form.nombre.value || Cursos.defaultProps.nombre,
            teacher:form.profesor.value || Cursos.defaultProps.profesor,
            date:form.date.value || Cursos.defaultProps.date,
            amount:form.amount.value || Cursos.defaultProps.amount,
            url:form.amount.url || Cursos.defaultProps.url,
            categories:Cursos.defaultProps.categories
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
            <ListaCursos cursos = {this.state.cursos} />
            </div>
        )
    }
}

Cursos.propTypes = {
    /*id:PropTypes.number.isRequired,
    nombre:PropTypes.string.isRequired ,
    profesor:PropTypes.string.isRequired */
}
Cursos.defaultProps = {
    nombre:'Desconocido',
    profesor:'La manta negra',
    date:new Date(),
    amount:30,
    categories:[],
    url:"https://github.com/curses"
}
export default Cursos