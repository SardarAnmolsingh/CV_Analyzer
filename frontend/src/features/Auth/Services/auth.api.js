import axios from "axios"

const api=axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:true
})


export async function register({username,email,password}) {
    try {
        const response = api.post('/api/auth/register', { username, email, password }, { withCredentials: true })

        return response.data
    } catch (e) {
        console.log(e)
    }
}
export async function login({email,password}) {
    try {
        const response = api.post('/api/auth/login', {email, password }, { withCredentials: true })

        return response.data
    } catch (e) {
        console.log(e)
    }
}

export async function logout() {
    try {
        const response = api.post('/api/auth/logout', { withCredentials: true })

        return response.data
    } catch (e) {
        console.log(e)
    }
}

export async function getme(){
    try{
      const response = api.get('/api/auth/getme',{withCredentials:true})
      return response.data
    }catch(e){
        console.log(e)
    }
}