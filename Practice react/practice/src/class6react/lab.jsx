import React, { useEffect } from "react";
import { useState } from "react";

export default function App() {
  // const [data,setdata] = useState()
  // function fun1(e){
  //   console.log(e.target);
  //   let{name,value} = e.target
  //   setdata({[name]:value})
  //   console.log(data)
  // }


  return (
    <div>
      <input placeholder="Name" onChange={fun1} />
      <br />
      <br />
      <input placeholder="Email" onChange={fun1}/>
      <br />
      <br />
      <input placeholder="Password" onChange={fun1} />
      <br />
      <br />
      <button onClick={signup}>Sign UP</button>
    </div>
  );