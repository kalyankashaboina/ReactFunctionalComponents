import React, { useCallback, useState } from 'react'
import ChildCallbacks from './ChildCallback'
import ChildTwo from './ChildTwo'

function ParentCallback() {
const[age,setAge]=useState(20)
const[salary,setSalary]=useState(20000)

const agePlus=useCallback(
    ()=>{
    setAge(age+1)
},[age])
const salaryPlus=()=>{
    setSalary(salary+10000)
}


  return (
    <div>
        <ChildTwo/>
<h2>my age is: {age}</h2>
<ChildCallbacks name="age" functions={agePlus}/>
<h2>my salary is : {salary}</h2>
<ChildCallbacks name="salary" functions={salaryPlus}/>
{console.log("tgis is from parent")}

    </div>

   
    
  )
}

export default ParentCallback