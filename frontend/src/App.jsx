import { RouterProvider } from "react-router/dom"
import router from "./app.routes.jsx"
import { Authprovider } from "./features/Auth/auth.context.jsx"

function App() {
  return (
    <>
      <div>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
      </div>
    </>
  )
}




export default App
