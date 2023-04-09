import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogAction, userBlogDeleteAction, userBlogUpdateAction } from '../../redux/actions/blogActions'
import ReactQuill from 'react-quill'

const Blogs = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state.allUsers)
  const {blogs,userBlogDeleted,userBlogupdated} = useSelector(state => state.allBlogs)
  const [deleteId, setDeleteId] = useState()
  const [editBlog, setEditBlog] = useState({
    heroImage : "",
    title:""
  })
  const [content, setContent] = useState()
 

    useEffect(() => {
      dispatch(getBlogAction(auth.id))
    }, [userBlogDeleted,userBlogupdated])


    const handleUpdate=()=>{
      dispatch(userBlogUpdateAction(editBlog))
    }
    


    const handleDeleteBlog = () => {
      dispatch(userBlogDeleteAction(deleteId))
    }
    
  return <>
 
     <table class="table table-dark table-striped table-hover">
       <thead>
         <tr>
           <th>#</th>
           <th>Title</th>
           <th>Content</th>
           <th>Image</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
       {
         blogs.map((item,i)=> <tr>
         <td>{i +1}</td>
         <td>{item.title}</td>
         <td>{item.content.substring(0,25)}...</td>
         <td>
           <img src={item.heroImage} height="100" alt="" />
         </td>
         <td>
           <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
            onClick={ e =>{
              setEditBlog(item),
            setContent(item)
            }} class="btn btn-warning btn-sm ">edit</button>
           <button 
           type="button" 
           class="btn btn-danger btn-sm mx-3"
           data-bs-toggle="modal"
           data-bs-target="#deleteModal"
           onClick={e => setDeleteId(item.id)}
           >delete</button>
         </td>
       </tr>)
       }
        
        </tbody>
     </table>
     {/* delete modal */}
      <div class="modal fade" id="deleteModal" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Blog</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h1>Are you sure ?</h1>
            <button 
              type="button" 
              class="btn btn-secondary" 
              data-bs-dismiss="modal"
              onClick={handleDeleteBlog}
              >Yes</button>
            <button 
              type="button" 
              class="btn btn-primary mx-2" 
              data-bs-dismiss="modal">No</button>
            </div>

          </div>
        </div>
      </div>
     {/* delete modal */}


     
     
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
           <div class="card mt-5">
                  <div class="card-header">
                    <h1>Create Awesome Blog</h1>
                    </div>
                  <div class="card-body">
                    <input
                        value={editBlog.heroImage}
                        onChange={e => setEditBlog({...editBlog,heroImage:e.target.value})} 
                        type="text" 
                        placeholder='Enter Image URL' 
                        className='form-control' />
                    <br />
                    <input
                        value={editBlog.title}
                        onChange={e => setEditBlog({...editBlog,title:e.target.value})} 
                        type="text" 
                        placeholder='Please Enter Title' 
                        className='form-control' />
                    <br />
                        <ReactQuill 
                        theme='snow'
                        value={content}
                        onChange={setContent}
                        ></ReactQuill>
                    <br />
                    <button 
                        onClick={handleUpdate}
                        type="button" 
                        class="btn btn-primary w-100">update</button>
                  </div>
                </div>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button>
           </div>
         </div>
       </div>
     </div>
    
  </>
}

export default Blogs