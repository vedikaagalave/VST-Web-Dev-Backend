// import React, { useState, useReducer } from "react";

// const App = () => {
//   const [count,SetCount]=useState(0);
//   const [color, ChangeColour] = useState("white");

//   // class 5
// function reduce(state, action) {

//   switch (action.type) {

//     case "inc":

//       return state + 1;

//     case "dec":

//       return state - 1;

//     case "reset":

//       return 0;

//     default:

//       return state;

//   }

// } 
// const [state, dispatch] = useReducer(reduce, 0);

// // to do list
//  const [task, setTask] = useState("");

//   const [todos, setTodos] = useState([]);

//   const addTask = () => {

//     if (task.trim() === "") return;

//     setTodos([...todos, task]);

//     setTask("");

// }
// // to do reducer type
// const reducer = (state, action) => {

//   switch (action.type) {

//     case "ADD":

//       return [...state, action.payload];

//     case "DELETE":

//       return state.filter((_, index) => index !== action.payload);

//     default:

//       return state;

//   }


// };



//   return (

//     <div style={{backgroundColor: color, height: '100vh'}}>
//       <h1> Class 1</h1>
//       <h2>{count}</h2>
//       <button onClick={() => SetCount(count + 1)}>add</button>
//       <br />
//       <button onClick={() => SetCount(count - 1)}>Decrease</button>
//       <br />
//       <button onClick={() => SetCount(0)}>Reset</button>
//       <button onClick={() => ChangeColour("Black")}>Change color</button>

//       {/* class 5 */}
//       <h1>class 5</h1>
//       <h2>{state}</h2>
//       <button onClick={() =>dispatch({type:"inc"})}>add</button>
//       <button onClick={() =>dispatch({type:"dec"})}>--</button>
//       <button onClick={() =>dispatch({type:"reset"})}>reset</button>


//       <h1>To-Do List </h1>

//       <input type="text"placeholder="Enter a task"value={task} onChange={(e) => setTask(e.target.value)}/>

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {todos.map((item, index) => (

//           <li key={index}>{item}</li>

//         ))}

//       </ul>
//        <h1>To-Do List Reducer</h1>

//       <input

//         type="text"

//         value={task}

//         placeholder="Enter task"

//         onChange={(e) => setTask(e.target.value)}

//       />

//       <button onClick={addTask}>Add</button>

//       <ul>

//         {todos.map((item, index) => (

//           <li key={index}>

//             {item}

//             <button

//               onClick={() =>

//                 dispatch({

//                   type: "DELETE",

//                   payload: index,

//                 })

//               }

//             >

//               Delete

//             </button>

//           </li>

//         ))}

//       </ul>

//     </div>
//   )
// }

// export default App


import React from "react";
import Signup from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Login from "./Login";

function App() {

  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<Signup/>}/>
      <Route  path="/login"  element={<Login/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );

}

export default App;

