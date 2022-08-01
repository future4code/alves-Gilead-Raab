import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Registration } from '../Pages/Registration'
import { Post } from '../Pages/Post'
import { FeedPage } from '../Pages/FeedPage'

export const Router =() => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<FeedPage/>}/>
      <Route path="login" element={<Login/>}/>        
      <Route path="registration" element={<Registration/>}/>       
      <Route path="post/:id" element={<Post/>}/> 
    </Routes>
  </BrowserRouter>
  )
}
