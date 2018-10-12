import React from 'react'
import './courses-list.css'
import imagen from './img.jpg'
const Cursos = (props) => (
    <li className="CoursesList-item">
        <a className="CoursesList-link" href={props.url} target="_blank">
            <figure>
                <img src={imagen} alt={props.name} />
                <figcaption>
                    <h2>{props.name}</h2>
                </figcaption>
            </figure>
        </a>
        <section>
            <p>
                <i className="fa fa-graduation-cap"></i>
                Profesor: {props.teacher}
            </p>
            <p>
                <i className="fa fa-calendar-o"></i>
                Fecha: {props.date}
            </p>
            <p>
                <b>
                    <i className="fa fa-dollar"></i>
                    Precio: {props.amount}
                </b>
                <b>
                    <i className="fa fa-key"></i>
                    Id: {props.id}
                </b>
            </p>
            <p>
                <i className="fa fa-tags"></i>
                Categorias: {
                    props.categories.map(
                        (cat, index, arr) =>
                            (index === arr.length - 1)
                                ? cat
                                : `${cat}, `
                    )
                }
            </p>
        </section>
    </li>
)
export default Cursos


//<li>{props.id} - {props.name} - {props.profesor}</li>
//{props.poster}