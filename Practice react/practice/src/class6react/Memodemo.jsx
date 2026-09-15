import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
// usememo is used to optimize value like it will be calculated only once so that it will optimize the performace of site
// useCallback is used to optimize function 
const Memodemo = () => {
    const[count,setcount] = useState(0)
    // let data = useMemo( () => {
    //     let res = 0;
    //     for(let i = 0;i<1000000000;i++){
    //         res +=i

    //     }
    //     return res

    // },[])
    let demo = () => {
        console.log("heheeee")
    }

    let fun = useCallback(demo,[])
    // local storage we used it to store data on local like if u login some where and u will get auto login that means it have stored ur data on ur local storage 
    // access inspect -> application -> local storage
    let obj = {
        id:1,
        name: "vedika"
    }
    localStorage.setItem("key",JSON.stringify(obj))
    localStorage.setItem("key1", "hihiiii")
    let data = localStorage.getItem("key1")
    console.log(data, "data stored")




    
  return (
    <div>
        {/* <h3>res: {data}</h3> */}
        <h3>{count}</h3>
        <button onClick={() => setcount(count+1)}>ADD</button>
        <h2>{data}</h2>

        <Child demo={fun}/>

    </div>
  )
}

export default Memodemo
