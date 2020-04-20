import React, {useEffect, useState} from 'react'

export const MyExerciseFour: React.FC = () => {
  const[counter, setCounter] = useState(0)
  useEffect(() => {
    if (counter > 0) {
      document.title = new Date().toISOString();
    }
  },[counter])

  return (
    <button onClick={()=>setCounter(counter + 1)}>Actualizar fecha</button>
  )
}
