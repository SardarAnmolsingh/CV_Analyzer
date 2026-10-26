import React,{useState} from 'react'
import { Link } from 'react-router'
import { useAuth } from '../Hooks/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const {loading,handleregister}=useAuth()
     
    const handlesubmit = async(e) =>{
                e.preventDefault()
                await handleregister({username,email,password})
                navigate("/")
            }
    return (
        <>
            <main className="bg-gray-900 h-screen w-screen text-white ">
                <div className=' h-screen flex flex-col justify-center items-center gap-0'>
                    <h1 className='text-4xl font-mono '>Register</h1>


                    <form className='flex flex-col justify-center items-center gap-3 mt-8' onSubmit={handlesubmit}>

                        <div className='flex flex-col justify-center items-center gap-2 font-mono'>
                            <label htmlFor="email">Username</label>
                            <input onChange={(e)=>{setusername(e.target.value)}} className='border-2 w-80 rounded-full text-center text-black bg-white h-10 ' type="username" id='username' name='username' placeholder='Enter your username' />
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2 font-mono'>
                            <label htmlFor="email">Email</label>
                            <input onChange={(e)=>{setemail(e.target.value)}} className='border-2 w-80 rounded-full text-center text-black bg-white h-10' type="email" id='email' name='email' placeholder='Enter your email' />
                        </div>


                        <div className='flex flex-col justify-center items-center gap-2 font-mono'>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e)=>{setpassword(e.target.value)}} className='border-2 w-80 rounded-full text-center  text-black bg-white h-10 ' type="password" id='password' name='password' placeholder='Enter your password' />
                        </div>


                        <button className='bg-red-600 h-10 rounded-full text-xl w-80 transition active:scale-120 font-mono m-4'>Register</button>
                    </form>


                    <p>Already have an account ?<Link className='text-red-600 m-2' to={"/Login"}>Login</Link></p>


                </div>
            </main>
        </>
    )
}

export default Register