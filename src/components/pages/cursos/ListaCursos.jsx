import React, { Component } from 'react'
import Cursos from './Cursos'
import './courses-list.css'
const ListaCursos = (props) => (
    <ul className="CoursesList">
        {
            props.cursos.map(course => (
                <Cursos
                    key={course.id}
                    id={course.id}
                    name={course.name}
                    poster={course.poster}
                    url={course.url}
                    amount={course.amount}
                    teacher={course.teacher}
                    date={course.date}
                    categories={course.categories}
                />
            )

            ).reverse()
        }

    </ul>
)

export default ListaCursos