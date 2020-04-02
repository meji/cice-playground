import React, { CSSProperties, useEffect, useState } from 'react'
import { bind } from './bind'
import styles from './my-exercise-eight.module.css'

const cx = bind(styles)
export const MyExerciseEight: React.FC = () => {
  const [grades, setGrades] = useState(0)

  return (
      <div>
        <input value={grades} type="number" onChange={e => setGrades(Number(e.target.value))}/>
        <div className={cx('gradient')} style={{'--grades':`${grades}deg`} as CSSProperties}> </div>
      </div>
  )
}
