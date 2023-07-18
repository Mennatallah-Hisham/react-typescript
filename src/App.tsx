
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/counter";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [count, setCount]=useState<number>(5);

const list=[
"menna","zayn","khai","gig"
]
  return (
    <>
  <Heading title={"page title"}/>
 
      
 <Section title={"pig bpoooo"}>
  <p> this is p1</p>
  <p> This is p2</p>
  <ul>
    <li>mfjfjfj</li>
    <li>mfjfjfj</li>
    <li>mfjfjfj</li>
    <li>mfjfjfj</li>
  </ul>
  </Section>
  <Counter  setCount={setCount} >
 <p>count is {count}</p>   
    </Counter>
    <List items={list}  
    render={(item:string)=><p>{item}</p>}/>
  </>
  )
}

export default App
