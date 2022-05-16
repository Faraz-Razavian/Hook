import React, {useState} from "react";

function HookCounter(){
    const [counter,setCounter]=useState(0)
    const updateFive=()=>{
        for(let i=0; i<5; i++){
            setCounter(pervState=>pervState+1)
        }
    }
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(pervState=> pervState+1)}>+1</button>
    <button onClick={()=>setCounter(pervState=> pervState-1)}>-1</button>
    <button onClick={updateFive}>+5</button>

    </>
  );
}

export default HookCounter;
