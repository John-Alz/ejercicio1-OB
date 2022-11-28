import React from 'react'
import { Contacto } from '../models/Contacto.class'
import ComponenteB from './ComponenteB'

export default function componenteA() {

    const defaultUser = new Contacto("John", "Angel", "jairoanngelll@gmail.com", true)

  return (
    <div>
    <div><h1>Users:</h1></div>
    <ComponenteB contacto={defaultUser}/>
    </div>
  )
}
