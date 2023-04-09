import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../redux/actions/userActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state.allUsers)
  return <>
  <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Blog</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">Home</Link>
          {/* jevha user login nasel start*/}
          {
            !auth && <>
            <Link className="nav-link active" to="login">Login</Link>
            <Link className="nav-link active" to="register">Register</Link>
           </>
          }
           {/* jevha user login nasel end */}

           {/* jevha user login ahe start */}
           {
            auth && <>
            <Link className="nav-link active" to="/user/account">Account</Link>
             {/* dropdowsn start */}
          <div class="dropdown mr-3">
            <button class="btn btn-dark mr-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
              {auth && auth.name}
            </button>
            <ul class="dropdown-menu">
              <li><button 
              onClick={e =>dispatch(logoutAction()) }
              class="dropdown-item">
                Logout</button></li>
              
            </ul>
          </div>
          {/* dropdown end */}
      </>
     }
           {/* jevha user login ahe end */}

           {/* user admin start */}
            {
              auth && auth.admin && <>
              <Link className="nav-link active" to="/admin">Dashboard</Link>
            </>
            }
           {/* user admin end */}

         
         
        </div>
      </div>
    </div>
  </nav>
  </>
}
// rich text edittor
// wysiwyg editor
// lazyloading
export default Navbar