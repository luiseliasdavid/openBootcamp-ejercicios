import React, {useEffect,useState} from 'react'

function Cuadrado() {



function getRandomInt() {
    return Math.floor(Math.random() * 255);
  }

const[cambiar,setCambiar]=useState({
  intervalo: null
})

const[estilo, setEst]= useState({
  width: '255px',          
  height: '255px',         
  background: `rgb(${100},${100},${200})`,        
  
})




function go() {
cambiar.intervalo = setInterval(()=> setEst({
  width: '255px',          
  height: '255px',         
  background: `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`,        
   
}, 50000)

)

}

function stop (){
 clearInterval(cambiar.intervalo);
  
  console.log('kejfhkejaf')

    }
    
      
    

  return (
    <div >
   
      <div  id='n' onMouseOver={()=>go()}  onMouseOut={()=>stop()} onDoubleClick={()=>stop()} style={estilo} >

     </div>
    </div>
  )
}

export default Cuadrado
