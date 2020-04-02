import React from 'react'
const list : number[] =[]
for(let i:number=1; i<=50; i++){
  list.push(i);
}
export const MyExerciseOne: React.FC = () => {
  return (
    <ul>
      {list.map(item => <li key={Math.random()*100000000000}>{item}</li>)}
    </ul>
  )
}
