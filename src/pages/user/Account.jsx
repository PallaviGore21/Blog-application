import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddBlog from './AddBlog'

const Account = () => {
  return <>
   <nav className="navbar navbar-expand-lg bg-success my-4">
     <div className="container-fluid">
     <Link className="navbar-brand" to="/user/account/blogs">Blog</Link>

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#accountNav">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="accountNav">
         <div className="navbar-nav">
           <Link className="nav-link active" to="/user/account/blogs">Blogs</Link>
           <Link className="nav-link active" to="/user/account/add-blog">Add Blog</Link>
          </div>
       </div>
     </div>
   </nav>
  <Outlet/>
</>
}
export default Account