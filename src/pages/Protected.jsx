import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({compo}) => {
 const {auth} = useSelector(state => state.allUsers)
 
 return auth ? compo: <Navigate to="/login"/>
}

export default Protected