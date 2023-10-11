/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurant from "./pages/Restaurant";
import Add from "./pages/Add";
import Search from "./pages/Search";
import Update from "./pages/Update";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import Layout from "./components/Layout";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminRoute from "./pages/AdminRoute";
import NotAllow from "./pages/NotAllow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Restaurant />} />
        <Route
          path="add"
          element={
            <AdminRoute>
              <Add />
            </AdminRoute>
          }
        />
        <Route
          path="search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route path="notallow" element= {<NotAllow/>}/>
        <Route path="singin" element={<SignIn />} />
        <Route path="singup" element={<SignUp />} />
        <Route path="logout" element={<SignUp />} />
        <Route path="/update/:restaurantId" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
