import React, {useRef,useEffect}  from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import '../../styles/contacto.scss'

const ContactoComponent = ({contacto, conected, deleteContact, onlineOffline}) => {

  const online= useRef()

  useEffect(()=>{
  
    return () => {
   //   console.log(`contacto:  ${contacto.name} a sido creado`)
    }
  },[contacto] )

 const estilo = {
  color:'green',
  fontWeight: 'lighter',
  textDecorationStyle: 'dotted'
 }
 

 function conectedContact (){
  if (contacto.conectado){
     return <i ref={online} onClick={()=>onlineOffline(contacto)} className="bi bi-person-check" style={{ color: "green" }}>On Line</i>}
  else {
    return <i ref={online} onClick={()=>onlineOffline(contacto)} className="bi bi-person-x-fill" style={{ color: "grey" }}>Off Line</i>
  }
 }



  return (
    <tr className="fw-normal">
      <td>
        <span className="ms-2">{contacto.nombre}</span>
      </td>
      <td className="align-middle">
        <span>{contacto.apellido}</span>
      </td>
      <td className="align-middle">
        <span>{contacto.email}</span>
      </td>
      <td className="align-middle">
        <span>
          {conectedContact()}
          <i onClick={()=>deleteContact(contacto)} className="bi bi-trash task-action" style={{color:'tomato'}}></i>
        </span>
      </td>
    </tr>

    
  );
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  conected: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  onlineOffline: PropTypes.func.isRequired
  
}

export default ContactoComponent


