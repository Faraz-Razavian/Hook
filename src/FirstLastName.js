import React, {useState} from "react";

function FirstLastName(){
    const [name,setName]=useState({firstname:'',lastname:''})
  return (
    <>
    <input type="text" value={name.firstname}onChange={event=>setName({...name,firstname:event.target.value})}/>
    <input type="text" value={name.lastname}onChange={event=>setName({...name,lastname:event.target.value})}/>
    <h1>Name: {name.firstname} Family: {name.lastname}</h1>

    </>
  );
}

export default FirstLastName;
