import React, {useState} from "react";

function HookRandomNumber(){
    const [items,setItems]=useState([])
    const clickHandler=()=>{
        setItems([...items,{
            key:items.length+1,
            value: Math.floor(Math.random() *10)+1
        }])
    }
  return (
    <>
    <button onClick={clickHandler}>Click</button>
    <ul>
        {items.map(item=>{
            return(
                <li key={item}>{item.key}-  <b>{item.value}</b></li>
            )
        })}
    </ul>
    </>
  );
}
export default HookRandomNumber;