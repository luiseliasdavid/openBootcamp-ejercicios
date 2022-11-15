import React from 'react'

function useCounter(initialValue=50) {

    const [contador, setContador]= React.useState(initialValue)

    const aumentar = () => {if (contador<80)setContador (contador +10)}
        
        
    
    const restar = ()=> {if (contador>0)setContador(contador-10)}


  return [contador,aumentar,restar]
}

export default useCounter
