import React, {useState,useEffect} from "react";

function HookCounterEff(){
    const [counter,setCounter]=useState(0)
    const [test,setTest]=useState(false)
    useEffect(()=>{
        console.log("hello")
        document.title=`Clicked: ${counter} items`
    },[counter])
  return (
    <>
    <button onClick={()=>setCounter(pervState=> pervState+1)}>ClickForTitle</button>
    <button onClick={()=>setTest(true)}>Click me {String(test)}</button>

    </>
  );
}
export default HookCounterEff;