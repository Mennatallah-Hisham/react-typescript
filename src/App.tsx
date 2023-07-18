
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/counter";
import List from "./components/List";
import PostList from "./components/PostList";
import EventExample from "./components/events/EventExample";
import { useState } from "react";
function App() {
  const [count, setCount]=useState<number>(5);

const list=[
"menna","zayn","khai","gig"
]
  return (
    <>
    <EventExample/>
    
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
    <h2>post list</h2>
    <PostList/>
  </>
  )
}

export default App
