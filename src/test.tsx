import React,{useState} from 'react'
import Props from './props'

 const Test = () => {
    const[name,setName]=useState<string>("surya")
    const fnChange=()=>{
        setName("surya"?"gayathri":"surya")
    }
  return (
    <div>
        {name}
        <button onClick={fnChange }>CHANGE NAME</button>
        <Props 
        name="surya"
        number={10}
        isPassed={true}
        players={["surya","gayathri"]}
        myArray={[10,"surya"]}
        player={{name:"surya",runs:20}}
        data={[{name:"surya",runs:20}]}
        />
        </div>
  )
}
export default Test
