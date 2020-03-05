import React from 'react'
import '../size'
import {Size} from "../size";
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'

const cx = bind(styles)

type IconType = "checked" | "unchecked"  |  "other"  | "eye"
const icons: Record<string, string> ={
  'checked' : '✔',
  'unchecked' : '⭕',
  'other' : '❤',
  'eye':'👁'
}
interface Props {
  type : IconType
  size?: Size
  className?: string
  onClick?(): void
}


export const Icon: React.FunctionComponent<Props> = ({type, size = 'm', className, onClick}) => {
  return (
    <i className={cx('icon', `icon-size-${size}`)}  onClick={onClick}>
      {icons[type]}
    </i>
  )
}
