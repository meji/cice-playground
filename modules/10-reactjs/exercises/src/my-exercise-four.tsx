import React, {useEffect, useState} from 'react'

export const MyExerciseFour: React.FC = () => {
  const[counter, setCounter] = useState(0)
  useEffect(() => {
    let today = new Date().toISOString();
    document.title = today
  },[counter])

  return (
    <button onClick={()=>setCounter(counter + 1)}>Actualizar fecha</button>
  )
}
