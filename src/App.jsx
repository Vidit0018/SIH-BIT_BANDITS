import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Form from "./pages/Form"
import Login from "./pages/Login"
import Signup from "./pages/Signup"



function App() {
  

  return (
    <div className="w-[100vw] min-h-[100vh] overflow-x-hidden">
        <Navbar/>

        <Routes>

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/forms' element={<Form/>}/> 

        </Routes>
    </div>
  )
}

export default App
