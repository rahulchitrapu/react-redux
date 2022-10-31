
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {increment} from "./actions"
import {decrement} from "./actions"
import {apiCall} from "./actions"
import { userDataAction } from './actions';
import { useEffect, useState } from 'react';

function App() {

  // const counter=useSelector(state=>state.counter)
  const totalState=useSelector(state=>state)
  const [search,setSearch]=useState(localStorage.getItem("name")?localStorage.getItem("name"):"")
  const [password,setPassword]=useState("")
  const [select,setSelect]=useState("")
  const arr=[1,2,3,4,5,6,7,8]
  const dispatch=useDispatch() 
  console.log(totalState)
  // console.log(search)

  useEffect(()=>{
    dispatch(apiCall(arr))
  },[])

  

  function onchangeHandler(e,type){
    // console.log(e)
      if(type==="SEARCH"){
        setSearch(e.target.value)
      }
      if(type==="PASSWORD"){
        setPassword(e.target.value)
      }
      if(type==="SELECT"){
        setSelect(e.target.value)
      }
      dispatch(userDataAction(type,e.target.value))
  }
  function func(arr){
   return arr.map((e,i)=>{
        return <option key={e} value={e}>{e}</option>
      })
  }
  
  console.log(select)


  return (
    <div className="App">
      <h1>count {totalState.counter}</h1>
      <input type="text" placeholder='search' value={search} id="SEARCH" onChange={(e)=>{onchangeHandler(e,"SEARCH")}}/>
      <input type="password" placeholder='password' value={password} id="PASSWORD" onChange={(e)=>onchangeHandler(e,"PASSWORD")}/>


      <select value={select}  onChange={(e)=>{onchangeHandler(e,"SELECT")}}>
        <option value="" key={Math.random()}>select</option>
        {func(arr)}
      </select>
      <h1>{totalState.userData.name}</h1>
      <button onClick={()=>dispatch(increment(3))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
