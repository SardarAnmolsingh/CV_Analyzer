import { useAuth} from "../Hooks/useAuth";
import React from 'react'
import { Navigate } from "react-router";

const Protected = ({children}) => {
 const {Loading,user} = useAuth()
 

 if(Loading){
    return (<main>loadingggggg</main>)
 }
 if(!user){
    return <Navigate to={"/login"}/>
 }



  return (
    children
  )
}

export default Protected