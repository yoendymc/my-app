import React from 'react'
const ListaAddForm = props => (
    <form onSubmit={props.onAddCurso}>
        <input type="text" placeholder="Nombre del curso" name="nombre"  />
        <input type="text" placeholder="Profesor" name="profesor"  />
        <input type="date" placeholder="Fecha de inicio" name="date" />
        <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
        <input type="submit" value="Guardar" />
    </form>
)

export default ListaAddForm