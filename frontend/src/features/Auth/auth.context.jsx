import  {useState,createContext} from "react"

export const Authcontext = createContext()

export const Authprovider =({children})=>{
    const [user, setuser] = useState(null)
    const [loading , setloading ] = useState(true)



    return(
        <Authcontext.Provider value={{user,setuser,loading,setloading}}>

        {children}

        </Authcontext.Provider>
    )
}