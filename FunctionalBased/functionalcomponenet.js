import { useState } from "react"

const Functional=()=>{

const [count,setCount]=useState(0)

const[Arr,setArray]=useState([1,2,3])
const ADD=()=>{
    setArray(arr=>[...arr,"hi"])
}


const inc=()=>{
    setCount(count+1)
}
const dec=()=>{
    if(count>0){
    setCount(count-1)
    }
}
const rest=()=>{
    setCount(count=>0)
}




    return(<>
    <h1>count is----- " {count}"</h1>
    
    
    <button onClick={inc}>plus</button> 
  <button onClick={dec}>minus</button>
    <button onClick={rest}>reset</button> <br></br>


    <button onClick={ADD}>inc</button>
    {
        Arr.map((val,ind)=>{
            return(<>

            <h5> the value is {val}</h5>
            
            </>)
        })
    }
    
    
    
    
    
    </>)
}

export default Functional