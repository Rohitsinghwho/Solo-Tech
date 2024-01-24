import React,{useState,useEffect} from "react"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import authService from "./AppwiteBackend/authentication"
import { useDispatch } from "react-redux"
import {login,logout} from './Store/AuthSlice'
import { Outlet } from "react-router-dom"
function App() {
    const [loading,setloading]=useState(true)
    const dispatch= useDispatch()
    useEffect(()=>{
      try {
         authService.getCurrentUser().then((user)=>{
          if(user){
            dispatch(login(user))
          }
          else{
            dispatch(logout())
          }
         }).finally(()=>setloading(false))
      } catch (error) {
         console.log(`error occured in apploading:: ${error}`);
      }
    },[])
  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ):null
}

export default App
