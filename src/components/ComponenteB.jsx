import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/Contacto.class'

function ComponenteB({contacto}) {
  return (
    <div>
    <h2>
        Nombre: {contacto.Nombre}
    </h2>
    <h2>
        Apellido: {contacto.Apellido}
    </h2>
    <h3>
        Email: {contacto.Email}
    </h3>
    <h4>
        Conectado: {contacto.Conectado ? "Contacto En Línea" : "Contacto No Disponible"}
    </h4>
    </div>
  )
}

ComponenteB.propTypes = {
    task: PropTypes.instanceOf(Contacto)
}

export default ComponenteB

