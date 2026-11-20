import { RouterProvider } from "react-router/dom"
import router from "./app.routes.jsx"
import { Authprovider } from "./features/Auth/auth.context.jsx"
import {InterviewProvider} from "../src/features/AI/interview.context.jsx"

function App() {
  return (
    <>
      <div>
        <InterviewProvider>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
        </InterviewProvider>
      </div>
    </>
  )
}




export default App
