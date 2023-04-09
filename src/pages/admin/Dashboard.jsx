import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetAllUsersAction, adminGetUserBlogs, adminPublishUnpublishBlogAction, adminUserBlockUnblockAction } from '../../redux/actions/adminActions'


const Dashboard = () => {
  const [selectedBlog, setSelectedBlog] = useState()
  
  const {userBlogs,loading,users,adminUserEdit,blogEdited} = useSelector(state => state.admin)
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(adminGetAllUsersAction())
  }, [adminUserEdit,blogEdited])

  const handleGetUserData = (id) => {
    dispatch(adminGetUserBlogs(id))
  }

  const handleShowEditBlog = (blog) => {
setSelectedBlog(blog)
  }

  const handleVisibility =(pub) => {
    dispatch(adminPublishUnpublishBlogAction(selectedBlog.id, pub))
  }

  const handleBlockUnblock = (id, act) => {
    dispatch(adminUserBlockUnblockAction(id,act))
  }

  useEffect(() =>{
    selectedBlog && handleGetUserData(setSelectedBlog.authorId)
  },[blogEdited])
  
  
  return <>
  {/* {JSON.stringify(users)} */}
  {/* {JSON.stringify(userBlogs)} */}

  <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <div className="card-header">Auther List</div>
          <div className="card-body">
           <ul className="list-group">
            
            {
              users.length === 0
               ? <h1>No users found</h1>
               :  users.map(item => <li 
                  className={
                    item.active  
                        ? "list-group-item list-group-item-success"
                        : "list-group-item list-group-item-danger"}>
                
                {
                  item.active
                    ? <button onClick={e =>handleBlockUnblock(item.id,false)} type="button" class="btn btn-danger">Block</button>
                    : <button onClick={e =>handleBlockUnblock(item.id,true)} type="button" class="btn btn-success">Unblock</button>
                }

               <h1>{item.name}</h1>
               <p>{item.email}</p>
               <button 
                 onClick={e => handleGetUserData(item.id)}
                 type="button" 
                 class="btn btn-primary">
                 Details</button>
                 
              </li>)
            }
            
           </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
          {
            loading
             ? <div class="spinner-border text-primary"></div>
            :<div class="card">
             <div class="card-header">{users.name}</div>
             {userBlogs.map(item => <div class="card-body">
            <button 
            onClick={ e =>handleShowEditBlog(item)}
            type="button" 
            class="btn btn-outline-warning my-3">Edit</button>
                {
                  item.publish 
                   ?<p className='alert alert-success'>
                    Blog Is Live
                   </p>
                   :<p className='alert alert-warning'>
                     Publish : <div class="spinner-border text-light"></div>
                     Pending
                   </p>
                }
              
              <h5>{item.title}</h5>
              <p>{item.content}</p>
  
              <hr />
            </div>)}
        </div>
            }
          
          
          
         
      </div>
      <div className="col-sm-5">
        <div class="card">
          <div class="card-header">Modify Blog</div>
         {
          selectedBlog &&<div class="card-body">
            <h1>{selectedBlog.title}</h1>
            {
              selectedBlog.publish
                 ? <button
                 onClick={e =>handleVisibility(false)} 
                 type="button" 
                 class="btn btn-primary">
                  Unpublish
                  </button>
                 : <button
                 onClick={e =>handleVisibility(true)} 
                 type="button" 
                 class="btn btn-primary">
                  publish
                  </button>
            }
          </div>
}
          
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Dashboard