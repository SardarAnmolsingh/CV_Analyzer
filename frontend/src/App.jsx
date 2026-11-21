import { RouterProvider } from "react-router/dom";
import router from "./app.routes.jsx";
import { Authprovider } from "./features/Auth/auth.context.jsx";
import { InterviewProvider } from "../src/features/AI/interview.context.jsx";

function App() {
  return (
    <>
      <div>
        <Authprovider>
          <InterviewProvider>
            <RouterProvider router={router} />
          </InterviewProvider>
        </Authprovider>
      </div>
    </>
  );
}

export default App;
