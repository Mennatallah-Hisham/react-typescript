

import {ReactNode} from "react";

type counterProps={
  setCount:React.Dispatch<React.SetStateAction<number>>,

  children:ReactNode
}
const counter = ({setCount,children}:counterProps) => {

  
  return (
    <div>
{children}
    <button onClick={()=>{setCount(prev=>prev+1)}}>
        increment
    </button>
    <button onClick={()=>{setCount(prev=>prev-1)}}>
       decrement
    </button>
    </div>
  )
}

export default counter