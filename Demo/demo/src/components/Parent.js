import Child from "./Child"
import { useState } from 'react'

export default function Parent(){
    const [parentcount, setParentCount] = useState(0)
    const [childcount, setChildCount] = useState(0)

    const changeParentCount= () => {
        setParentCount(parentcount+1);
    }

    const changeChildCount= () => {
        setChildCount(childcount+1);
    }

    return <div>
        This is the parent component
        <h1>Parent count is {parentcount}</h1>
        <Child count={childcount}></Child>
        <button onClick={changeParentCount}>Increment parent count</button>
        <button onClick={changeChildCount}>Increment child count</button>
    </div>
}