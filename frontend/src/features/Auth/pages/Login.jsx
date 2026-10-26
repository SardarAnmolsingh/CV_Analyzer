import { React, useState }from 'react'
import { Link } from 'react-router'
import { useAuth } from '../Hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
const {loading , handlelogin} = useAuth()
const Navigate= useNavigate()


const [email, setemail] = useState("")
const [password, setpassword] = useState("")



    const handlesubmit = async(e) =>{
        e.preventDefault()
      await handlelogin({email,password})
      Navigate("/")
    }

    if(loading){
        return <main>Loadingggggg</main>
    }
    return (
        <main className="bg-gray-900 h-screen w-screen text-white ">
            <div className=' h-screen flex flex-col justify-center items-center gap-0'>
                <h1 className='text-4xl font-mono '>Login</h1>


                <form className='flex flex-col justify-center items-center gap-5 mt-4' onSubmit={handlesubmit}>

                    <div className='flex flex-col justify-center items-center gap-2 font-mono'>
                        <label htmlFor="email">Email</label>
                        <input  onChange={(e)=>{setemail(e.target.value)}} className='border-2 w-80 rounded-full text-center text-black bg-white h-10' type="email" id='email' name='email' placeholder='Enter your email' />
                    </div>




                    <div className='flex flex-col justify-center items-center gap-2 font-mono'>
                        <label htmlFor="password">Password</label>
                        <input  onChange={(e)=>{setpassword(e.target.value)}} className='border-2 w-80 rounded-full text-center  text-black bg-white h-10' type="password" id='password' name='password' placeholder='Enter your password' />
                    </div>


                    <button className='bg-red-600 h-10 rounded-full text-xl w-80 transition active:scale-120 font-mono mt-1 mb-4' >Login</button>
                </form>


               <p>don't have an account ?<Link className='text-red-600 mx-1.5 mt-3' to={"/Register"}>Register</Link></p>


            </div>
        </main>

    )
}

export default Login