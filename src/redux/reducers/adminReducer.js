import { ADMIN_EDIT_BLOG_FAIL, ADMIN_EDIT_BLOG_REQUEST, ADMIN_EDIT_BLOG_SUCCESS, ADMIN_GET_ALL_USERS_FAIL, ADMIN_GET_ALL_USERS_REQUEST, ADMIN_GET_ALL_USERS_SUCCESS, ADMIN_GET_USER_BLOGS_FAIL, ADMIN_GET_USER_BLOGS_REQUEST, ADMIN_GET_USER_BLOGS_SUCCESS, ADMIN_USER_BLOCK_UNBLOCK_FAIL, ADMIN_USER_BLOCK_UNBLOCK_REQUEST, ADMIN_USER_BLOCK_UNBLOCK_SUCCESS } from "../constants/adminConstant";

export const adminReducer = (state={users: [],userBlogs: []},{type,payload}) => {
    switch (type) {
        case ADMIN_GET_ALL_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case ADMIN_GET_ALL_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: payload
        }
        case ADMIN_GET_ALL_USERS_FAIL: return {
            ...state,
            loading: false,
            adminGetUserError: payload
        }
        case ADMIN_GET_USER_BLOGS_REQUEST: return {
           ...state,
           loading:true
           
        }
        case ADMIN_GET_USER_BLOGS_SUCCESS: return {
          ...state,
          loading:false,
          userBlogs: payload
        }
        case ADMIN_GET_USER_BLOGS_FAIL: return {
          ...state,
          loading:false,
          adminGetUserBlogError: payload
        }
        case ADMIN_EDIT_BLOG_REQUEST: return {
          ...state,
          loading:true
          
        }
        case ADMIN_EDIT_BLOG_SUCCESS: return {
          ...state,
          loading:false,
          blogEdited: !state.blogEdited
          
        }
        case ADMIN_EDIT_BLOG_FAIL: return {
          ...state,
          loading:false,
          adminEditBlogError: payload
       
        }
        case ADMIN_USER_BLOCK_UNBLOCK_REQUEST: return {
          ...state,
          loading:true
        }
        case ADMIN_USER_BLOCK_UNBLOCK_SUCCESS: return {
          ...state,
          loading:false,
          adminUserEdit:!state.adminUserEdit
        }
        case ADMIN_USER_BLOCK_UNBLOCK_FAIL: return {
          ...state,
          loading:false
        }
        default: return state
          
    }
}