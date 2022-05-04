import React,{useState,useEffect} from 'react'

function HookCounterOne() {

const[count, setCount] = useState(0)

useEffect(
    () => {  // this call back will be executed after each rendering is done
        document.title = `you clicked ${count} times`
    } 
)

  return (
    <div>
        <button onClick= 
        {
            () => setCount(count +1)
        }>
        clicked {count} times
        </button>
    </div>
  )
}

export default HookCounterOne