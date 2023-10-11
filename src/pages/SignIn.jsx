import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.server';
import {useAuthContext} from '../context/AuthContext'

const Signin = () => {
  const [user, setUser] = useState({
    user: '',
    password: '',
  });
  const navigate = useNavigate();
  const {login} = useAuthContext
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const login = await AuthService.login(user.username,user.password);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Login to Your Account</h5>
          {/* <div className="error">{error && 'Incorrect email or password.'}</div> */}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">name</label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  onChange={handleChange}
                  value={user.username}
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
                  value={user.password}
                />
              </div>

              <button
                type="submit"
           
                className="btn btn-success"
                onClick={handleSignin}
              >
                Sign In
              </button>

              <Link to="/SingUp" className="btn btn-secondary">
                Don't have an account? Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
