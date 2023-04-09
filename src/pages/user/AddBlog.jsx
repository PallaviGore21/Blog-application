import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlogAction } from '../../redux/actions/blogActions'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
// import ReactHtmlParser from "react-html-parser"

const AddBlog = () => {
    const [content,setContent] = useState()
    
    const {auth} = useSelector(state => state.allUsers)
    
    const [blogData, setBlogData] = useState({
        heroImage:"https://images.unsplash.com/photo-1674718320543-a7c80472059b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        title:"Learn modern React Redux"
    })

    const dispatch = useDispatch()
    const handleAddBlog = () => {
       dispatch(addBlogAction({
        ...blogData,
        content,
        publish: false,
        authorId: auth.id
       }))
    }
  return <>
  {/* {ReactHtmlParser(content)} */}
     <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card mt-5">
                  <div class="card-header">
                    <h1>Create Awesome Blog</h1>
                    </div>
                  <div class="card-body">
                    <input
                        value={blogData.heroImage}
                        onChange={e => setBlogData({...blogData,heroImage:e.target.value})} 
                        type="text" 
                        placeholder='Enter Image URL' 
                        className='form-control' />
                    <br />
                    <input
                        value={blogData.title}
                        onChange={e => setBlogData({...blogData,title:e.target.value})} 
                        type="text" 
                        placeholder='Please Enter Title' 
                        className='form-control' />
                    <br />
                    {/* <input 
                        value={blogData.content}
                        onChange={e => setBlogData({...blogData,content:e.target.value})}
                        type="text" 
                        placeholder='Please Enter Content' 
                        className='form-control' /> */}
                        <ReactQuill 
                        theme='snow'
                        value={content}
                        onChange={setContent}
                        ></ReactQuill>
                    <br />
                    <button 
                        onClick={handleAddBlog}
                        type="button" 
                        class="btn btn-primary w-100">Add Blog</button>
                  </div>
                </div>
            </div>
        </div>
     </div>
 </>
}

export default AddBlog