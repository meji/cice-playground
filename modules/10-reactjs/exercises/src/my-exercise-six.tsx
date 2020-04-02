import React, {useEffect, useState} from 'react'

export const MyExerciseSix: React.FC = () => {
  const [value, setValue] = useState('')
  useEffect(()=>{
    const valueLocal: string | null = window.localStorage.getItem('value')
    valueLocal && setValue(valueLocal)
  },[])
  return (
    <input type="text" value={value} onChange={e=> {
      setValue(e.target.value);
      window.localStorage.setItem('value', e.target.value)
    }}/>
  )
}
