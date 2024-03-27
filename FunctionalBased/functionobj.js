import { useState } from "react";

const Obj = () => {
  const [arr] = useState(["kalyan", "yadav"]);
  const [obje] = useState({ name: "harsha", place: "damera" });
  const [arrobj, setarrobj] = useState([
    { name: "harsha", place: "damera" },
    { name: "kalyan", place: "darmasagar" },
    { name: "kumar", place: "hanamkonda" },
    { name: "ashok", place: "hyderabad" },
    { name: "rakesh", place: "warngal" },
  ]);

  return (
    <>
      <h1>array</h1>
      {arr.map((name) => {
        return <h6>{name}</h6>;
      })}



      <h4>object</h4>
      <h6>
        {obje.name} {obje.place}
      </h6>



      <h4>array of objects</h4>
      {arrobj.map((ele,id) => {
        return (
          <>
            {" "}
            <i>THE INFORMATION</i>
            <h6 >NAME--{ele.name.toUpperCase()}</h6>
            <h6 key={id}>PLACE--{ele.place}</h6>
          </>
        );
      })}
    </>
  );
};
export default Obj;
