import React, {useState} from 'react'

function HookCounter() {

   const [count,setCount] = useState(0)
  return (
    <div>
         <div>Counter -- {count}</div>

        <button onClick={()=>setCount(count+1)}>increment </button>
    </div>
  )
}

export default HookCounter