import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './image.module.css'

const cx = bind(styles)

interface Props {
  src: string,
  alt: string,
  onClick(): void
}
export const Image: React.FunctionComponent<Props> = ({src, alt}) => {
  return <img className={cx('image')} src={src} alt={alt} onClick={()=>onclick}/>
}
