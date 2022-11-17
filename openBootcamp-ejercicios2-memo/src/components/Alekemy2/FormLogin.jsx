import React from 'react'
import {useFormik} from "formik"
function FormLogin() {

const initialValues= {
email:"",
password:""
}

const validate = values => {
    const errors = {};

    if(!values.email){
        errors.email = "mail es requerido"
    }
    if(!values.password){
        errors.password = "pasword es requerido"
    }
    return errors
}

const onSubmit = ()=> {
localStorage.setItem("logged", "yes")
}

const formik = useFormik({initialValues,validate, onSubmit})

const {handleSubmit,handleChange,errors,values}= formik

  return (
    <div className="form" style={{display: "flex",justifyContent: "space-between",color:"blue"}}>
     <form onSubmit={handleSubmit}>
             <div className="input-container">
         <label>Mail </label>
         <input
          type="email"
           name="email" 
           value={values.email}
           onChange={handleChange}
            />
         {errors.email && <div>{errors.email}</div> }
       </div>
       
       <div className="input-container">
         <label>Password </label>
         <input
          type="password"
           name="password"
           value={values.password}
           onChange={handleChange}
            />
        {errors.password && <div>{errors.password}</div> }
       </div>
      
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
  )
}

export default FormLogin
