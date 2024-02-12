import React from 'react'
type player={
name:string
runs:number
}
type propsType={
name:string
number:number
isPassed:Boolean
players:string[]
myArray:(string| number)[]
player:player
data:player[]
}
 const Props = (props:propsType) => {
  return (
    <div>{props.name}
    {props.number}
    </div>
  )
}
export default Props
