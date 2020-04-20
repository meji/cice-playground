import React, { useEffect, useState } from 'react'

function CountdownTimer(time: number) {
  let dateActual = new Date()
  dateActual.setSeconds(time)
  const calculateTimeLeft = () => {
    let difference = +dateActual - +new Date();
    let timeLeft = {days:0, hours: 0 ,minutes: 0, seconds:0}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  },[timeLeft]);
  return timeLeft
}

export const MyExerciseEleven: React.FC = () => {
  const [timeInitial, setTimeInitial] = useState(0)
  let time = CountdownTimer(timeInitial)
  const reset = (e:any) =>{
    e.preventDefault()
    time = CountdownTimer(timeInitial)
  }
  let seconds = time.seconds
  let minutes = time.minutes
  let hours = time.hours
  return (
    <div>
      <p>Countdown:Hours: {hours} Minutos: {minutes}Segundos: {seconds}</p>
      <form onSubmit={e =>reset(e)}><input type="number" value={timeInitial} onChange={e => setTimeInitial(Number(e.target.value))}/><input type='submit' value="Enviar"/></form>
      <button>Reset</button>
      <button>Play / Pause</button>
    </div>
  )
}
