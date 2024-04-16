import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'



const initialvalue={
  count:0,name:"kalyan"
}


const reducer=(state,action)=>{

//   switch(action.type){
// case "INCREMENT":
// return{...state,count:state.count+1}
// case "DECREMENT":
//   return{...state,count:state.count-1}
//   default:return state
//   }

if(action.type==="INCREMENT"){
  return{count:state.count+1}
  
}
else if(action.type==="DECREMENT"){
  return{count:state.count-1}
  
}
else return state



}



function Reducers() {

    const[state,dispatch]=useReducer(reducer,initialvalue)

    const Increment=()=>{
      dispatch({type:"INCREMENT"})
    }
    const DecremntFunction=()=>{
      dispatch({type:"DECREMENT"})
    }

    console.log(state)
    // console.log("dispatch",dispatch)
  return (
    <div>Reducer

<button onClick={Increment}>Increment</button>

<h3>{state.count}</h3>
<button onClick={DecremntFunction}>Decremnt</button>

    </div>




  )
}

export default Reducers