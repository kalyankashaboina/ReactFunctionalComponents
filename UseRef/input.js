import React, { useEffect, useRef } from 'react'

function Input() {
    const inputvalue=useRef("")
   

useEffect(()=>{
    inputvalue.current.focus()
},[])
    
    
  return (
    <>
    <input type='text' ref={inputvalue}/>
    </>
  )
}

export default Input