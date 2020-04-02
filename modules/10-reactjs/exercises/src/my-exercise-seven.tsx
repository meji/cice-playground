import React, { useEffect, useState } from 'react'
export const MyExerciseSeven: React.FC = () => {
  const [pokemons, setPokemons] = useState([])
  const savePokemons: () => Promise<void> = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const result = await response.json()
    setPokemons(result.results)
  }
  useEffect(() => {
    savePokemons()
  }, []);
  return (
    <div>
      {pokemons.map((pokemon:any, index) => <p key={index}>{pokemon.name}</p>)}
    </div>
  )
}
