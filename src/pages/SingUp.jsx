import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthService from '../services/auth.server'

function SignUp() {
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassWord: '',
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (restaurant.password === restaurant.confirmPassWord) {
        const register = await AuthService.register(
          restaurant.name,
          restaurant.email,
          restaurant.password
        );
        navigate('/signin');
      } else {
        setError(true);
        setErrorMessage('Failed! Password mismatched!');
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage('An error occurred during sign up.');
    }
  };

  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Sign Up</h5>
          <div className="error">{error && errorMessage}</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Username"
                  onChange={handleChange}
                  value={restaurant.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={restaurant.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={restaurant.password}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassWord">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassWord"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={restaurant.confirmPassWord}
                />
              </div>

              <button className="btn btn-success" onClick={handleSignUp}>
                Sign Up
              </button>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;