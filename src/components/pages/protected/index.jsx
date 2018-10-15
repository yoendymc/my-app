import React, { Component } from 'react'
import Cursos from '../cursos/'

export default class DashboardCursos extends Component{
    render(){
        return (
            <article className = "Main-container">
            <Cursos />
            </article>
        )
    }
}