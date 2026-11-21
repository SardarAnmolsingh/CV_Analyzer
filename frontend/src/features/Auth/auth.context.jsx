import  {useState,createContext} from "react"
import { getme } from "./Services/auth.api"


export const Authcontext = createContext()

export const Authprovider =({children})=>{
    const [user, setUser] = useState(null)
    const [loading , setloading ] = useState(true)


     
    
    return(
        <Authcontext.Provider value={{user,setUser,loading,setloading}}>

        {children}
       
        </Authcontext.Provider>
    )
    
}