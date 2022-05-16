import React, {useState,useEffect} from "react";

function HookTimer(){
    const [tick,setTick]=useState(0)
    
    useEffect(()=>{
        const interval= setInterval(() => {
            setTick(tick+1)
        }, 1000);
        return()=>{
            clearInterval(interval)
        }
    },[tick])
  return (
    <div>
        {tick}
    </div>
  );
}
export default HookTimer;