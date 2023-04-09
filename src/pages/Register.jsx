import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserAction } from '../redux/actions/userActions'

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        name: "admin",
        email:"admin@gmail.com",
        password:"456",
        active: true,
        admin: false
    })  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading, registered , registrationError} = useSelector(state => state.allUsers)
    const handleSubmit = () => {
       dispatch(registerUserAction(registrationData))
    }
    useEffect(() => {
     if (registered) {
      navigate("/login")
     }
    }, [registered])
   
    
    
  return <>
    <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
                {
                   registrationError && 
                       <div class="alert alert-danger">
                            <h1>Something went wrong</h1>
                            <p>{registrationError}</p>
                       </div>
                }
                {
                    loading && 
                      <div class="spinner-border text-light"></div>
                }
              <div className="card">
                <div className="card-header">Signup</div>
                <div className="card-body">
                  <div>
                    <label for="name" className="form-label">First name</label>
                    <input
                      value={registrationData.name}
                      onChange={e => setRegistrationData({
                      ...registrationData,
                      name: e.target.value
                    })}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="mt-2">
                    <label for="email" className="form-label">First Email</label>
                    <input
                      value={registrationData.email}
                      onChange={e => setRegistrationData({
                      ...registrationData,
                      email: e.target.value
                    })}
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
                      value={registrationData.password}
                      onChange={e => setRegistrationData({
                      ...registrationData,
                      password: e.target.value
                    })}
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose a password.</div>
                  </div>
                  <div className="mt-2">
                    <label for="cpassword" className="form-label"
                      >Confirm Password</label>
                    
                    <input
                     
                      type="text"
                      className="form-control"
                      id="cpassword"
                      placeholder="Confirm Your Password"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please Recheck Your Password.
                    </div>
                  </div>
                  <button 
                  onClick={handleSubmit}
                  type="button" 
                  className="btn btn-primary w-100 mt-3">
                    Signup
                  </button>
                  <p className="text-center mt-3">
                    Already Have Account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
}

export default Register