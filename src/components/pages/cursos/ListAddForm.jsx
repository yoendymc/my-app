import React from 'react'
import {teachers, categories} from '../../../Data/'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './course-add-form.css'
import uid from 'uid'


const optionsTeachers = teachers.map(t=>Object.assign({}, {label:t, value:t}))
const ListaAddForm = props => (
    <form onSubmit={props.onAddCurso} className = "pure-form  AddForm">
        <input type="text" placeholder="Nombre del curso" name="nombre"  pattern="[a-zA-Z\s]*"/>        
        <input type="text" placeholder="Profesor" name="profesor"  />
        <input type="date" placeholder="Fecha de inicio" name="date" />
        <input type="number" name="amount" placeholder ="Precio"/>
        <input type="url" name="url" placeholder="Url"/>
        <input type="hidden" name="id" value={uid(10)} />
        <input type="submit" value="Guardar" className="pure-button pure-button-primary"/>
    </form>
)

export default ListaAddForm


//<select name="profesor" multiple options={optionsTeachers} >Profesor</select>
