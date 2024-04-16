import React from 'react'

function ChildTwo() {
  return (
    <div>

       <h1>im parent child two</h1> 
       {console.log("this from child two")}
    </div>
  )
}

export default React.memo(ChildTwo)
