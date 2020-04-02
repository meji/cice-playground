import React, {useState} from 'react'

export const MyExerciseTwo: React.FC = () => {
  const [counter, setCounter] = useState(0)
  return <button onClick={()=> setCounter(counter + 1)}>{counter}</button>
}
