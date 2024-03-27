import { useRef } from "react"

const RefOne=()=>{
const initial=useRef(0)
const handle=()=>{
    initial.current--;
    console.log("count is",initial.current)
}

return(<>
<div>
    <button onClick={handle}>UseRef</button>
</div>



</>)


}
export default RefOne