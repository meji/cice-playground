import React, {FormEvent, useState} from 'react'
import {Icon} from "../../core/components/icon/icon";




export const Item: React.FC<{ hidden: boolean; name: string; nameSelected:string}> = ({name, nameSelected}) => {
    const [hidden, setHidden] = useState(false)
    return (
      <p>
        <span>{name}</span>
        <Icon type="eye" onClick={()=>setHidden(!hidden)}/>
        <span>{hidden === false ? '*******' : nameSelected}</span>
      </p>
    )
}
