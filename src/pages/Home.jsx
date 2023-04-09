import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllBlogAction } from '../redux/actions/blogActions'
// import ReactHtmlParser from "react-html-parser"
import axios from 'axios'

const Home = () => {
  const [paginated, setPaginated] = useState([])
  const {blogEdited} = useSelector(state => state.admin)
  const dispatch = useDispatch()
  // const {reduxBlogs} = useSelector(state => state.allBlogs)

  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(2)

 const getBlogsAction =async e=>{
  const result = await axios.get(`http://localhost:5000/blogs?_limit=${size}&_page=${page}`)
       const x = result.headers["x-total-count"]
       setTotal(Math.ceil(x/size));
          setPaginated(result.data)
 }
 
 useEffect(() => {
  getBlogsAction()
 }, [page,size])
 

  useEffect(() => {
   dispatch(getAllBlogAction())
   
  }, [blogEdited])
  
  return <>
  {/* {JSON.stringify(paginated)} */}
  <br />
 
  <div className="container">
    <div className="row">
  <select onChange={e=>setSize(e.target.value)} class="form-select bg-success">
  <option selected>Open No. of cards</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="5">5</option>
</select>
    {
       paginated && paginated.map(item => <div 
        className="col-sm-6">
        <div class="card my-4 gy-5">
          <img 
          src={item.heroImage} 
          alt={item.title}
          className="img-fluid" />
          <div class="card-body">
           <h1>{item.title}</h1>
           {/* <p>{ReactHtmlParser(item.content.substring(0,100))}</p> */}
            <Link 
            to={`/details/${item.id}`}  
            className='ms-3'>
            read more</Link>
            
          </div>
        </div>
      </div>)
      }
    </div>
  </div>
  <div className='container'>
  {
    [...Array(total).keys()].map((item,index)=>
        <button className='btn btn-danger gap-2 m-3 mr-5' onClick={e=>setPage(index+1)}>{index+1}</button>
    )
   }
   </div>
  </>
}

export default Home