import { useState } from "react"
import Counter from "./counter"
import FunctionalCounter from "./FunctionalCounter"
export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true)

    return display ? 
    (<div><h3>This is a condition component</h3></div>) : 
    (<div><h3>Nothing to see here</h3></div>)

    //OR

   /* let output;
    if(display) {
        output = <h3>This is a condition component</h3>
     } else {
        output = <h3>Nothing to see here</h3>
     }
     return <div>{output}</div>;*/

     //OR

   /* if(display) {
        return(
            <div>
            <h3>This is a condition component</h3>
        </div>
        )
    } else{
        return (
            <div>
            <h3>Nothing to see here</h3>
        </div>
        )
    }*/
   
}