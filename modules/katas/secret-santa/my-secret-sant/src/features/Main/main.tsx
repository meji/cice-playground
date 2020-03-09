import React, {FormEvent, useState} from 'react'
import {Page} from "../../core/components/page/page";
import {TextInput} from "../../core/components/text-input/text-input";
import {Button} from "../../core/components/button/button";
import {Icon} from "../../core/components/icon/icon";
import {Item} from "../Item/item";



export const Main: React.FC<{}> = () => {

  const [names,setNames] = useState<string[]>([])
  const [name,setName] = useState('')
  const [namesAssigned, setNamesAssigned] = useState<string[]>(names)


  const addNames = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setNames([...names, name])
      setName('')
  }
  return (
    <>
      <Page>
        <h1>Secret Santa</h1>
        <form onSubmit={(e)=>addNames(e)}><TextInput label='Nombre' value={name} onChange={setName}/><Button submit>Añadir</Button></form>
        { names.map((name, index)=>{
          const nameSelected = "Pepito";
          return(
            <Item key="index" hidden={false} name={name} nameSelected={nameSelected}/>
          )
        })}
        {names.length > 0 &&  <Button>Asignar</Button>}
      </Page>
    </>
  )
}
