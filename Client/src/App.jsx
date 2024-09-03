import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {Outlet} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  // const [messageing, setmessage] = useState("")

  // const data = {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   message: 'Hello, world!',
  // };

  // const fetchAPI = async ()=>{
  //   const response = await axios.get("http://localhost:8080/api")
  //   console.log(response.data.message)
  //   setmessage(response.data.message)
    
  // }

  // useEffect(()=>{
  //   fetchAPI()
  // },[])

  // const send = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const response = await axios.post("http://localhost:8080/api", data)
  //     console.log(response.data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // };
  

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
