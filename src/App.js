import React,{useReducer} from "react";
import ApiHook from "./ApiHook";
import ComponentContextA from "./ComponentContextA";
import ComponentReContextA from "./ComponentReContextA";
import FirstLastName from "./FirstLastName";
import HookCounter from "./HookCounter";
import HookCounterEff from "./HookCounterEff";
import HookRandomNumber from "./HookRandomNumber";
import HookTimer from "./HookTimer";
import MouseHook from "./MouseHook";


export const UserContext=React.createContext()
export const SalaryContext=React.createContext()
export const CounterContext= React.createContext()

const initialValue = 0
    const reducer=(state,action)=>{
      switch (action){
        case 'inc':
          return state+1
        case 'dec':
          return state-1
        default:
          return state
      }
    }
function App () {
    const [counter,dispatch]=useReducer(reducer,initialValue)
    return (
    <>
    <CounterContext.Provider value={{countState:counter,countDispatch:dispatch}}>
      <div>
        Counter: {counter}
        <ComponentReContextA/>
      </div>
    </CounterContext.Provider>
    <UserContext.Provider value="Faraz">
      <SalaryContext.Provider value="1000">
        <ComponentContextA/>
      </SalaryContext.Provider>
    </UserContext.Provider>
    <br/>
    <ApiHook/>
    <br/>
    <HookTimer/>
    <br/>
    <MouseHook/>
    <br/>
    <HookCounterEff/>
    <br/>
    <HookCounter/>
    <br/>
    <FirstLastName/>
    <br/>
    <HookRandomNumber/>
    </>
  );}


export default App;
