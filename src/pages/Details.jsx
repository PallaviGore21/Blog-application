import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getSingleBlogAction } from '../redux/actions/blogActions'

const Details = () => {
  const {singleBlog} = useSelector(state => state.allBlogs)
  const {blogId} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getSingleBlogAction(blogId))
  }, [])
  
  return <>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <Link to="/" type="button" class="btn btn-outline-light my-4">Back</Link>
        <div class="card mt-5">
            {
              singleBlog &&  <div class="card-body">
              <h1>{singleBlog.title}</h1>
              <img 
              src={singleBlog.heroImage} 
              alt={singleBlog.title}
              className="img-fluid"/>
                <p>{singleBlog.content}</p>
              </div>
            }
         
         </div>
      </div>
    </div>
  </div>
  </>
}

export default Details