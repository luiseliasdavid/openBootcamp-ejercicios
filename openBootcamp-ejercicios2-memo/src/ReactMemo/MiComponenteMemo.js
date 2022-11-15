import React, { useState, memo } from 'react'

export const MiComponenteMemo = () => {
  const names = ['luis', 'alejandra']
  const [name, setName] = useState('')

  const getNames = () => {
    const random = Math.floor(Math.random() * (names.length - 1))
    return names(random)
  }
  const clearName = () => {
    setName('')
  }
 const obteinNme =()=>{
    setName(getNames())
 }
 
  return (
    <div>
      <h1>Ejemplo de uso memo</h1>
      <NombresAleatorios name={name} claerName={clearName}></NombresAleatorios>
    </div>
  )
}
export const NameComponent = (props) => {
  console.log('renderizado de memo')

  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={()=>props.clearName()}>
          borrar nombre
      </button>
    </div>
  )
}
function nameAreEqual(prevProps,nextProps){
    return prevProps.name !== nextProps.name
}

export const NombresAleatorios = memo(NameComponent,nameAreEqual)
