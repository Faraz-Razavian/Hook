import React, {useState,useEffect} from "react";
import axios from "axios";
function ApiHook(){
    const [employee,setEmployee]=useState([])
    const [id,setId]=useState(170407)
    // const [idFromButton,setIdFromButton]=useState(170407)
    
    useEffect(()=>{
        axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then(res=>{
            setEmployee(res.data)
        })
        .catch(e=>console.log(e))
    },[id])
    // const handleClick=()=>{
    //     setIdFromButton(id)
    // }
  return (
    <div>
        <input value={id} onChange={(e)=>setId(e.target.value)}/>
        {/* <button onClick={handleClick}>Update</button> */}
        <p>{employee.employee_name}</p>
    </div>
  );
}
export default ApiHook;