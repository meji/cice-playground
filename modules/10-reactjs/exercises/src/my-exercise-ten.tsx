import React, { useEffect, useState } from 'react'

function useGetTeclas(){
  const [teclas, setTeclas] = useState<string[]>([]);
  const getPressedKeys = (e:KeyboardEvent)=>{
    setTeclas([...teclas, e.key])
  }
  useEffect(() => {
    window.addEventListener('keypress', getPressedKeys);
    return () => window.removeEventListener('keypress', getPressedKeys);
  }, [teclas]);
  return teclas
}

export const MyExerciseTen: React.FC = () => {
  const teclis = useGetTeclas()
  return (
    <div>
      {[teclis]}
    </div>
  )
}
