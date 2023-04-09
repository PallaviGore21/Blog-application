import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../redux/actions/userActions'

const Login = () => {
 const [loginData, setLoginData] = useState({
  email: "john@gmail.com",
  password: "123"
})
const {loading, loginError, auth} = useSelector(state => state.allUsers)
 const dispatch = useDispatch()
 const handleLogin = () => {
   dispatch(loginAction(loginData))
 }
 const navigate = useNavigate()
 useEffect(() => {
   if (auth) {
    if (auth.admin) {
      navigate("/admin")
    }else{

      navigate("/user/account/blogs")
    }
   }
 }, [auth])

 

  return <>
  <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            {
              loginError && <div class="alert alert-danger">
               {loginError}
              </div>
            }
            
            {
              loading && <div class="alert alert-succes">
               loading
               <div class="spinner-border text-primary"></div>
              
              </div>
            }
            <div className="card">
              <div className="card-header bg-success">Login</div>
              <div className="card-body">
                <div>
                  <label for="email" className="form-label">First Email</label>
                  <input
                    value={loginData.email}
                    onChange={e => setLoginData({...loginData, email: e.target.value})}
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label for="password" className="form-label">Password</label>
                  <input
                    value={loginData.password}
                    onChange={e => setLoginData({...loginData, password: e.target.value})}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <button 
                onClick={handleLogin}
                type="button" 
                className="btn btn-primary w-100 mt-3">
                  Login
                </button>
                <p className="text-center mt-3">
                  Dont Have Account? <Link to="/register">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Login