import { useState ,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Restaurant from "./pages/Restaurant"
import Add from "./pages/Add"
import Search from "./pages/Search"
import Update  from './pages/Update'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'


function App() {
  return (
   <BrowserRouter>
    <NavBar/>
    <div className="App">
     <Routes>
      <Route path="/" element={<Restaurant/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/update/:restaurantId" element = {<Update/>}/>
      <Route path="/signin " element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
     </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App;
