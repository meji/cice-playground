import React, {useState} from 'react'

export const MyExerciseThree: React.FC = () => {
  const [value, setValue] = useState('')
  function writeConsonant(text:string):string{
    return text.split('').filter((letter: string) => {
      return (!['a', 'e', 'i', 'o', 'u'].includes(letter))
    }).join('')
  }
  return (
    <input type="text" value={value} onChange={e=> setValue(writeConsonant(e.target.value))}/>
  )
}
