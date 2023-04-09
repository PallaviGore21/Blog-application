import { ADD_BLOG_FAIL, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, GET_ALL_BLOGS_FAIL, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_FAIL, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_SINGLE_BLOG_FAIL, GET_SINGLE_BLOG_REQUEST, GET_SINGLE_BLOG_SUCCESS, USER_BLOG_DELETE_FAIL, USER_BLOG_DELETE_REQUEST, USER_BLOG_DELETE_SUCCESS, USER_BLOG_UPDATE_FAIL, USER_BLOG_UPDATE_REQUEST, USER_BLOG_UPDATE_SUCCESS } from "../constants/blogConstants";

export const blogReducer = (state = {blogs: []},{type,payload}) => {
    switch (type) {
        case ADD_BLOG_REQUEST:return {
              ...state,
              loading: true
        }
        case ADD_BLOG_SUCCESS:return {
              ...state,
              loading: false,
              blogAdded: true
        }
        case ADD_BLOG_FAIL:return {  
              ...state,
              loading: false,
              AddBlogError: payload
        }
        case GET_BLOG_REQUEST:return {  
              ...state,
              loading: true,
             
        }
        case GET_BLOG_SUCCESS:return {  
              ...state,
              loading: false,
              blogs: payload
            
        }
        case GET_BLOG_FAIL:return {  
              ...state,
              loading: false,
              getBlogError: payload

            
        }
        case GET_ALL_BLOGS_REQUEST:return {  
              ...state,
              loading: true
              
      }
        case GET_ALL_BLOGS_SUCCESS:return {  
              ...state,
              loading: false,
              reduxBlogs:payload
              
       }
        case GET_ALL_BLOGS_FAIL:return {  
              ...state,
              loading: false,
              reduxBlogsError: payload
      }
        case GET_SINGLE_BLOG_REQUEST:return {  
              ...state,
              loading: true,
              reduxBlogsError: payload
      }
        case GET_SINGLE_BLOG_SUCCESS:return {  
              ...state,
              loading: false,
              singleBlog: payload
      }
        case GET_SINGLE_BLOG_FAIL:return {  
              ...state,
              loading: false,
             getSingleBlogError: payload
      }
        case USER_BLOG_DELETE_REQUEST:return {  
              ...state,
              loading: true
             
      }
        case USER_BLOG_DELETE_SUCCESS:return {  
              ...state,
              loading: false,
              userBlogDeleted: true
            
      }
        case USER_BLOG_DELETE_FAIL:return {  
              ...state,
              loading: false,
              userBlogDeleteError: payload
          
      }

      case USER_BLOG_UPDATE_REQUEST:return {  
            ...state,
            loading: true
           
    }
      case USER_BLOG_UPDATE_SUCCESS:return {  
            ...state,
            loading: false,
            userBlogupdated: true
          
    }
      case USER_BLOG_UPDATE_FAIL:return {  
            ...state,
            loading: false,
            userBlogUpdteError: payload
        
    }
        default:return state
            
    }
}