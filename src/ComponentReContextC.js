import React,{useContext} from "react";
import {CounterContext} from './App'
function ComponentReContextC(){
    const Ccontext= useContext(CounterContext)
    return(
        <div>
            <button onClick={()=>Ccontext.countDispatch('inc')}>Increment</button>
            <button onClick={()=>Ccontext.countDispatch('dec')}>Decrement</button>
        </div>
    )
}
export default ComponentReContextC