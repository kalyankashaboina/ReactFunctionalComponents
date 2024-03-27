import { useState } from "react"

const Boolean=()=>{

const[isLink,setisLink]=useState(false)

  const hi=()=>{
    setisLink(true)
  }



    return(<>

    {isLink?<h4>child visible</h4>:<button onClick={hi}> click here</button>}
    
    
    
    
    </>)
}
export default Boolean