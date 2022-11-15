import React,{useState, useEffect} from 'react';

import { Contacto } from '../../models/contacto.class'; 
import { CONECTADO } from '../../models/conectado';
import ContactoComponent from '../pure/contacto'
import ContactForm from '../pure/forms/contactForm';

 const ContactListComponent = () => {
     
     const defaultContact1 = new Contacto('Luis1' , 'David' , 'hola@gmail.com' , CONECTADO.TRUE)
     const defaultContact2 = new Contacto('Luis2' , 'David' , 'ho5g5la@gmail.com' , CONECTADO.FALSE)
     const defaultContact3 = new Contacto('Luis3' , 'David' , 'hoegela@gmail.com' , CONECTADO.TRUE)


     const [contacts, setContact] = useState([defaultContact1,defaultContact2,defaultContact3]);
     const [isLoadin,setIsLoading]= useState(true)

     useEffect(() => {

       // console.log('contacto ha sido modificado')
         setIsLoading(false)
        return () => {
       //     console.log('this component is goin to unmount')
        };
     }, [contacts]);

     function conectedContact(contact){
      const index= contacts.indexOf(contact);
      const tempContact= [...contacts];
      tempContact[index].CONECTADO= !tempContact[index].CONECTADO
      setContact(tempContact);
    }
  
    function deleteContact(contact){
     // console.log('delete this task', task)
      const index= contacts.indexOf(contact);
      const tempContact= [...contacts];
      tempContact.splice(index,1)
      setContact(tempContact)
    }
    function addContact(contact){
      //console.log('add this task', task)
      //const index= contacts.indexOf(contact);
      const tempContact= [...contacts];
      tempContact.push(contact)
      setContact(tempContact)
    }
    function onlineOffline(contacto){
      const contact= new Contacto(contacto.nombre , contacto.apellido , contacto.email , !contacto.conectado)
      const index= contacts.indexOf(contacto);
      const tempContact= [...contacts];
      tempContact.splice(index,0,contact)
      tempContact.splice(index + 1,1)
      setContact(tempContact)
       
      
    }
    
    return (
      <div className="col-12">
       
       <div className="card">
         
         <div className="card-header p-3">
           <h5>tus contactos:</h5>
         </div>
        
         <div
           className="card-body"
           data-mdb-perfect-scrollbar="true"
           style={{ position: "relative", height: "400px" }}
         >
           <table>
             <thead>
               <tr>
                 <th scope="col"> Nombre </th>
                 <th scope="col"> Apellido </th>
                 <th scope="col"> Email </th>
                 <th scope="col"> Conectado </th>
               </tr>
             </thead>

             <tbody>
               {contacts.map((cont, index) => (
                 <ContactoComponent
                   key={index}
                   contacto={cont}
                   conected={conectedContact}
                   deleteContact={deleteContact}
                   onlineOffline= {onlineOffline}
                 ></ContactoComponent>
               ))}
             </tbody>
           </table>
         </div>
       </div>
         <ContactForm addContact={addContact}></ContactForm>
         
      </div>
    );
};

export default ContactListComponent





 
