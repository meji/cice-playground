import React, {useState} from 'react'

export const MyExerciseFive: React.FC = () => {
 const [counter, setCounter] = useState(10)
   if (counter === 0){
     return (
       <p>
         Boom <button onClick={()=>(setCounter(10))}>Resetear</button>
       </p>
     )
   }
  return (
    <button onClick={()=>setCounter(counter -1)}>{counter} </button>
  )
}
