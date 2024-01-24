import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const AuthLayout = ({children,authentenction=true}) => {
    const authStatus= useSelector(state=>state.auth.status);
    const [loader,setLoader]= useState(true)
    const navigate=useNavigate();
    useEffect(()=>{
        // true&&true!=true
        // true&&true!=false
        if(authentenction&&authentenction!==authStatus){
            navigate('/login')
        }
        // true && false!==true
        else if(!authentenction&&authentenction!==authStatus){
            navigate('/')
        }
        setLoader(false)
    },[])
  return loader?(<h1>Loading.......</h1>):(<>{children}</>)
}

export default AuthLayout