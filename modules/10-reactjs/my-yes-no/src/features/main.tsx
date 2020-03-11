import React, {useEffect, useState} from 'react'
import {Page} from "../core/components/page/page";
import {Image} from "../core/components/image/image";
import styles from './main.module.css'

//Data transfer Object
interface YesNoDto{
  answer: 'yes' | 'no' | 'maybe'
  forced: boolean
  image: string
}

export function Main() {
  const [srcImage, setSrcImage] = useState('')
  const [counter, setCounter] = useState(0)
  const  fetchImage = async() =>{
    const response = await fetch('https://yesno.wtf/api')
    const result = (await response.json()) as YesNoDto;
    setSrcImage(result.image)
  }
  useEffect(()=>{
    fetchImage()
  }, [counter]);
  return (
    <Page>
      <Image src={srcImage} alt={'tra tra'} onClick={()=>setCounter(counter + 1)}/>
    </Page>
  )
}

