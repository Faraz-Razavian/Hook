import React, {useState,useEffect} from "react";

function MouseHook(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    
    const logMouseMove=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        window.addEventListener('mousemove',logMouseMove)
        return()=>{
            window.removeEventListener('mousemove',logMouseMove)
        }
    },[])
  return (
    <>
    <h1>x: {x} - y: {y}</h1>
    </>
  );
}
export default MouseHook;