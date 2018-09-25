import React, { Component } from 'react'
import Cursos from './Cursos'

const ListaCursos = (props)=>(
        <ul>
            {
                props.cursos.map(curso=>(
                    <Cursos
                    key = {curso.id}
                    id = {curso.id}
                    name = {curso.nombre}
                    profesor = {curso.profesor}
                    />
                )

                )
            }
           
        </ul>
)

export default ListaCursos