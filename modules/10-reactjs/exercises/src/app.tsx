import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import {MyExerciseOne} from "./my-exercise-one";
import {MyExerciseTwo} from "./my-exercise-two";
import {MyExerciseThree} from "./my-exercise-three";
import {MyExerciseFour} from "./my-exercise-four";
import {MyExerciseFive} from "./my-exercise-five";
import {MyExerciseSix} from "./my-exercise-six";
import {MyExerciseSeven} from "./my-exercise-seven";
import { MyExerciseEight } from './my-exercise-eight'
import { MyExerciseNine } from './my-exercise-nine'
import { MyExerciseTen } from './my-exercise-ten'
import { ExerciseTwo } from './exercise-two'
import { ExerciseThree } from './exercise-three'
import { ExerciseFour } from './exercise-four'
import { ExerciseFive } from './exercise-five'
import { ExerciseSix } from './exercise-six'
import { ExerciseSeven } from './exercise-seven'
import { ExerciseEight } from './exercise-eight'
import { ExerciseNine } from './exercise-nine'
import { ExerciseTen } from './exercise-ten'
import { ExerciseEleven } from './exercise-eleven'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/my-exercise-one">My Exercise one</Link>
      <Link to="/my-exercise-two">My Exercise two</Link>
      <Link to="/my-exercise-three">My Exercise three</Link>
      <Link to="/my-exercise-four">My Exercise four</Link>
      <Link to="/my-exercise-five">My Exercise five</Link>
      <Link to="/my-exercise-six">My Exercise six</Link>
      <Link to="/my-exercise-seven">My Exercise seven</Link>
      <Link to="/my-exercise-eight">My Exercise eight</Link>
      <Link to="/my-exercise-nine">My Exercise nine</Link>
      <Link to="/my-exercise-ten">My Exercise ten</Link>
      <div>
      <Route path="/my-exercise-one">
        <MyExerciseOne />
      </Route>
      <Route path="/my-exercise-two">
        <MyExerciseTwo />
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
      <Link to="/exercise-eight">Exercise eight</Link>
      <Link to="/exercise-nine">Exercise nine</Link>
      <Link to="/exercise-ten">Exercise ten</Link>
      <Link to="/exercise-eleven">Exercise eleven</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
      <Route path="/exercise-three">
        <ExerciseThree />
      </Route>
      <Route path="/exercise-four">
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix storage={sessionStorage} />
      </Route>
      <Route path="/exercise-seven">
        <ExerciseSeven />
      </Route>
      <Route path="/exercise-eight">
        <ExerciseEight percentage={70} />
      </Route>
      <Route path="/exercise-nine">
        <ExerciseNine />
      </Route>
      <Route path="/exercise-ten">
        <ExerciseTen />
      </Route>
      <Route path="/exercise-eleven">
        <ExerciseEleven />
      </Route>
    </BrowserRouter>
  )
}
