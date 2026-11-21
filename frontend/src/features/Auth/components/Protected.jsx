import { useAuth } from "../Hooks/useAuth";
import React from 'react'
import { Navigate } from "react-router";




const Protected = ({children}) => {
 const {loading,user} = useAuth()
 

 if(loading){
    return (<main>loadingggggg</main>)
 }
 console.log(user)
 if(!user){
    return <Navigate to={"/login"}/>
 }



  return (
    children
  )
}

export default Protected