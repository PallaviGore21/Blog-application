import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import Details from './pages/Details'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Protected from './pages/Protected'
import Register from './pages/Register'
import Account from './pages/user/Account'
import AddBlog from './pages/user/AddBlog'
import Blogs from './pages/user/Blogs'

const App = () => {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:blogId' element={<Details/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/user/account' element={<Protected compo={<Account/>}/>} >
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='add-blog' element={<AddBlog/>}/>
    </Route>
    <Route path='/admin' element={<Dashboard/>} />
    <Route path='*' element={<h1>Page not found</h1>} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App