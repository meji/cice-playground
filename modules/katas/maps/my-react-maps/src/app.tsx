import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Mapi } from './features/ui/mapi'

const cx = bind(styles)


export function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const getPosition = () =>{
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude)
      setLongitude(pos.coords.longitude)
    }, err => {
      console.log(err)
    })
  }
  useEffect(()=>{
   getPosition()
  }, [])
  return(
    <div className={cx('app')}>
      <Mapi latitude={latitude} longitude={longitude}/>
    </div>
  )
}

