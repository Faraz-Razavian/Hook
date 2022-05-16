import React,{useContext} from "react";
import {UserContext,SalaryContext}from './App'
function ComponentContextC(){
    const name= useContext(UserContext)
    const salary= useContext(SalaryContext)
    return(
        <>
        Context:::::::::::
        <p>Name: {name} </p>
        <p>Salary: {salary}$</p>
        </>
    )
}
export default ComponentContextC