import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/AuthSlice'
import authService from '../../AppwiteBackend/authentication'
const LogoutBtn = () => {
    const dispatch= useDispatch();
    const handleLogout=()=>{
        authService.logout().then(()=>{
                dispatch(logout())
        })
    }
  return (
    <button
    onClick={handleLogout}
    type="button"
    class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
    LogOut
  </button>
  )
}
export default LogoutBtn