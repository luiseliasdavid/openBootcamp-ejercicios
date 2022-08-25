import React, { useRef } from 'react'
import PropTypes from 'prop-types'


import { CONECTADO } from '../../../models/conectado.js'
import { Contacto } from '../../../models/contacto.class'

export default function ContactForm({addContact}) {

  const nameRef= useRef('')
  const lastNameRef= useRef('')
  const emailRef= useRef('')

  function addNewContact(e){
    e.preventDefault();
    const newContact= new Contacto(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      CONECTADO.FALSE
    )
    addContact(newContact)
  }

  return (
    <div>hola
    <form
      onSubmit={addNewContact}
      className="d-flex justifi-content-center  aligin-center mb-4"
    >
      <div className="form-outline flex">
        <input 
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='Nombre'
        />
        <input
          ref={lastNameRef}
          id="inputLastName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='Apellido'
        />
        <input
          ref={emailRef}
          id="inputEmail"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='Email'
        />
      </div>
     
      <button type='submmit' className='btn btn-success btn-lg ms-2' >add</button>
    </form>
  </div>);
}

ContactForm.propTypes={  
  addContact: PropTypes.func.isRequired
}
