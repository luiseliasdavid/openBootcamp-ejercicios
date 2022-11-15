import React from 'react'
import useCounter from '../../hooks/useCounter'

function Contador() {
 

    const [num,aumentar,restar ] = useCounter(0)



  return (

    <div>
     <h1>{num} </h1>
     <button onClick={aumentar}>aumentar</button>
     <button onClick={restar}>restar</button>
    </div>
  )
}

export default Contador
