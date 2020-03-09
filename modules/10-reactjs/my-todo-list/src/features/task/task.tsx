import React from 'react'
// import { bind } from '../../../utils/bind'
// import styles from './task.module.css'
import {Icon} from "../../core/components/icon/icon";

// const cx = bind(styles)

interface Props {
  text: 'string'
}

export const Task: React.FunctionComponent<Props> = ({text}) => {
  return (
    <li>
      <Icon type={icon} size={'1em'}/>
      <span>{text}</span>
    </li>
  )
}
