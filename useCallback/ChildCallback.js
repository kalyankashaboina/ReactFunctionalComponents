import React from 'react'

function ChildCallbacks({name,functions}) {
  return (
    <div>
        
        
    <button onClick={functions}>{name}</button>
{console.log(`this is from ${name}`)}



        
        </div>
  )
}

export default React.memo(ChildCallbacks)