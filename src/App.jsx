import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./components/Layout/Rootlayout"
import Auth from "./components/Auth/Auth"


const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',element:<Auth/>

        }
      ]
    }
  ])



  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App