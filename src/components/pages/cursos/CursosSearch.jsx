import React from 'react'
import  '../css/cursos-search.css'

const CoursesSearch = props=> (

    <form className = "pure-form SearchForm">
    <input type="search" name="search" id="search" onChange = {props.onSearch} placeholder ="Buscar por Cursos, Profesor, Categoria"/>
    <label hmtlfor = "Search">
    <i className ="fa fa-search"></i>
    </label>
    </form>
)

export default CoursesSearch