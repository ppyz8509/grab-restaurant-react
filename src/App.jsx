import { useState ,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Restaurant from "./pages/Restaurant"
import Add from "./pages/Add"
import Search from "./pages/Search"
import Update  from './pages/Update'
import Signin from './pages/Signin'
import Sigup from './pages/SigUp'

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
      <Route path="/signin " element={<Signin/>} />
      <Route path="/sigup" element={<Sigup/>} />
     </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App;
