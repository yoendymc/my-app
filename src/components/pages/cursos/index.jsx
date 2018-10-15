import React, { Component } from 'react'
import {cursos, categories, teachers} from '../../../Data/index'
import ListaCursos from './ListaCursos'
import ListaAddForm from './ListAddForm'
import CoursesSearch from './CursosSearch'

class Cursos extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            cursos: cursos,
            teachers:teachers,
            categories:categories,
            filter:{
                name:'',
                teacher:'',
                categories:[],
                search:''
            }

        }
        this.handleOnAddCurso = this.handleOnAddCurso.bind(this)
        this.handleOnSearch = this.handleOnSearch.bind(this)
        this.handleOnFilter = this.handleOnFilter.bind(this)
        
    }
    handleOnAddCurso(e) {
        //alert('evento react')
        e.preventDefault()
        let form = e.target,
        curso = {
            id:form.id.value,
            name:form.nombre.value || Cursos.defaultProps.nombre,
            teacher:form.teacher.value || Cursos.defaultProps.profesor,
            date:form.date.value || Cursos.defaultProps.date,
            amount:form.amount.value || Cursos.defaultProps.amount,
            url:form.amount.url || Cursos.defaultProps.url,
            categories:(form.categories)?[form.categories.value] : Cursos.defaultProps.categories
        }
        this.setState({
            cursos:this.state.cursos.concat([curso])
        })
        form.reset()
    }

    handleOnFilter(f, vls){
        let regex = new RegExp(f.search, 'i')
        return vls.filter( q=>( regex.test(q.name) || regex.test(q.teacher) || regex.test(q.categories)) )

    }

    handleOnSearch(e){
        let newFilter = Object.assign({}, this.state.filter, {[e.target.name]:[e.target.value]})
        this.setState({
            filter:newFilter
        })
console.log(newFilter)
    
    }

    render() {
        if(!this.state.cursos.length)
        {
            return (
                <article>
                    <p>No hay cursos :(</p>
                </article>
            )
        }else
        {
            return (
                <article>
                <ListaAddForm onAddCurso = {this.handleOnAddCurso} />
                <CoursesSearch onSearch = {this.handleOnSearch} />
                <ListaCursos cursos = {this.handleOnFilter(this.state.filter, this.state.cursos)} />
                </article>
            )
        }
    }
}

/*Cursos.propTypes = {
    /*id:PropTypes.number.isRequired,
    nombre:PropTypes.string.isRequired ,
    profesor:PropTypes.string.isRequired 
}*/
Cursos.defaultProps = {
    nombre:'Desconocido',
    profesor:'Desconocido',
    date:'No definida',
    amount:30,
    categories:['No definidas'],
    url:"https://github.com/curses"
}
export default Cursos