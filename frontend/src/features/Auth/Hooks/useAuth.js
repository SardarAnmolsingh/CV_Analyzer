import { useContext } from "react";
import { Authcontext } from "../auth.context";
import { getme, login, logout, register } from "../Services/auth.api";
import { useEffect } from "react";

export const useAuth = () => {
    const context = useContext(Authcontext)
    const { user, setuser, loading, setloading } = context




    const handlelogin = async ({ email, password }) => {

        setloading(true)
        try {
            const data = await login({ email, password })
            setuser(data.user)
        } catch (e) {
            console.log(e)
        } finally {
            setloading(false)
        }
    }

    const handleregister = async ({ username, email, password }) => {
        setloading(true)
        try {
            const data = await register({ username, email, password })
            setuser(data.user)
        } catch (e) {
            console.log(e)
        } finally {
            setloading(false)
        }
    }

    const handlelogout = async () => {
        setloading(true)
        try {
            const data = await logout()
            setuser(null)
        } catch (e) {
            console.log(e)
        } finally {
            setloading(false)
        }


    }




    useEffect(() => {
        const getandsetfunc = async () => {

            try {
                const data = await getme()
                setuser(data.user)
            } catch (e) {
                console.log(e)
            } finally {
                setloading(false)
            }

        }

        getandsetfunc()

    }, [])
}
return { user, loading, handlelogin, handlelogout, handleregister }

