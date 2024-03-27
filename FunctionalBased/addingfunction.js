import { useState } from "react";

const Adds = () => {
  const [arr, setchanges] = useState([2, 3, 5, 6]);

  let b = [4, 7, 3];
  let i=0
  const changes = () => {
    let c = (arr, b) => {
        arr.push(b[i])
        i++
    //   let d = b.slice(i,i+1);
    //   console.log(d)
    //   console.log(b)

    //   if (d != undefined) {
  
    //       return [...arr,d];
    //   }
    
      
    };

    setchanges(c(arr,b))

  };

{console.log(arr)}



  return (
    <>
      <button onClick={changes}>plus</button>
      {arr.map((val, ind) => {
        return <h6 key={ind}> the value is {val}</h6>;
      })}
    </>
  );
};
export default Adds;
