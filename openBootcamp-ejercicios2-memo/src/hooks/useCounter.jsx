import React from 'react'

function useCounter(initialValue) {

    const [contador, setContador]= React.useState(initialValue)

    const aumentar = () => setContador (contador +1)
        
        
    
    const restar = ()=> setContador(contador-1)


  return [contador,aumentar,restar]
}

export default useCounter
