
import React from 'react'

const EventExample = () => {
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
    }

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
  
}

const handleDelete=(id:number,e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    console.log(id);
}
  return (
 <>
 <form>
    <input type="text" placeholder="search for anything" onChange={handleChange}/>

    <button onClick={handleClick}>search</button>
 </form>
 <form className='card'>
    <h1> Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, a ullam rem nulla eaque eveniet placeat labore voluptatem sint, ex asperiores, quae aspernatur rerum quidem.</p>
    <button onClick={(e)=>handleDelete(1,e)}>delete</button>
 </form>
 <form className='card'>
    <h1> Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, a ullam rem nulla eaque eveniet placeat labore voluptatem sint, ex asperiores, quae aspernatur rerum quidem.</p>
    <button onClick={(e)=>handleDelete(2,e)}>delete</button>
 </form>


 </>
  )
}

export default EventExample