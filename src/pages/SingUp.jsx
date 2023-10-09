import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthService from '../services/auth.server'

function SignUp() {

  const [restaurant, setRestaurant] = useState({
    name: "",
    email: "",
    password:"",
    confirmPassWord:"",
  })
  setError(false); 
  const handleChange = async (e) => {
    e.preventDefault();
    try {
     if (UserActivation.confirmPassWord === user.password) {
      const register = await AuthService.register(
        user.name,
        user.email,
        user.password
      );
      navigate("/signin");
     }else{
      setError(true);
      setErrorMessage({ message: "Failed! Password mismatched !"})
     }
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.reponse.data);
    }
  };


  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className='card-header'>Sign Up</h5>
          <div className="error">{error && "somethingwrong"}</div>
          <div className="card-body">

            <form>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className='form-control'
                  name="name"
                  placeholder='Username'
                  onChange={handleChange}
                  value={restaurant.name} />
              </div>


              <div className="form-group">
                <label htmlFor="type">Email</label>
                <input
                  type="text"
                  className='form-control'
                  name="type"
                  placeholder='Email'
                  onChange={handleChange}
                  value={email} />
              </div>


              <div className="form-group">
                <label htmlFor="image">Password</label>
                <input
                  type="text"
                  className='form-control'
                  name="password"
                  placeholder='Password'
                  onChange={handleChange}
                  value={password} />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassWord">Confirmpassword</label>
                <input
                  type="text"
                  className='form-control'
                  name="confirmPassWord"
                  placeholder='Confirmpassword'
                  onChange={handleChange}
                  value={confirmPassWord} />
              </div>

              <Link to="" className='btn btn-success' >
                sing up
              </Link>
              <Link to="/" className='btn btn-danger' >
                Cancel
              </Link>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp