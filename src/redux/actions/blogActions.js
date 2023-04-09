import api from "../api"
import { ADD_BLOG_FAIL, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, GET_ALL_BLOGS_FAIL, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_FAIL, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_SINGLE_BLOG_FAIL, GET_SINGLE_BLOG_REQUEST, GET_SINGLE_BLOG_SUCCESS, USER_BLOG_DELETE_FAIL, USER_BLOG_DELETE_REQUEST, USER_BLOG_DELETE_SUCCESS, USER_BLOG_UPDATE_FAIL, USER_BLOG_UPDATE_REQUEST, USER_BLOG_UPDATE_SUCCESS } from "../constants/blogConstants"

export const addBlogAction = arg => async dispatch => {
    try {
        dispatch({ type: ADD_BLOG_REQUEST })
        const { data } = await api.post("/blogs", arg)
        dispatch({ type: ADD_BLOG_SUCCESS })
    } catch (error) {
        dispatch({ type: ADD_BLOG_FAIL, payload: error })
    }
}

export const getBlogAction = userId => async dispatch => {
    try {
        dispatch({ type: GET_BLOG_REQUEST })
        const { data } = await api.get("/blogs", {
            params: {
                authorId: userId
            }
        })
        console.log(data);
        dispatch({ type: GET_BLOG_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_BLOG_FAIL, payload: error })
    }
}

export const getAllBlogAction = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_BLOGS_REQUEST })
        const { data } = await api.get("/blogs",{
            params:{
                publish:true
            }
        })
        console.log(data);
        dispatch({ type: GET_ALL_BLOGS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_BLOGS_FAIL, payload: error })
    }
}

export const getSingleBlogAction = arg => async dispatch => {
    try {
        dispatch({ type: GET_SINGLE_BLOG_REQUEST })
        const { data } = await api.get(`/blogs/${arg}`)
        console.log(data);
        dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_SINGLE_BLOG_FAIL, payload: error })
    }
}

export const userBlogDeleteAction = blogId => async dispatch => {
    try {
        dispatch({type:USER_BLOG_DELETE_REQUEST})
        const {data} = await api.delete(`/blogs/${blogId}`)
        dispatch({type:USER_BLOG_DELETE_SUCCESS})
    } catch (error) {
        dispatch({type:USER_BLOG_DELETE_FAIL, payload: error})
    }
}

export const userBlogUpdateAction = blog => async dispatch => {
    try {
        dispatch({type:USER_BLOG_UPDATE_REQUEST})
        const {data} = await api.put(`/blogs/${blog.id}`,blog)
        dispatch({type:USER_BLOG_UPDATE_SUCCESS})
    } catch (error) {
        dispatch({type:USER_BLOG_UPDATE_FAIL, payload: error})
    }
}