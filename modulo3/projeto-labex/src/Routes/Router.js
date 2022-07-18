import React from 'react'
import {AdminHomePage} from '../Pages/AdminHomePage'
import {ApplicationFormPage} from '../Pages/ApplicationFormPage'
import {CreateTripPage} from '../Pages/CreateTripPage'
import {HomePage} from '../Pages/HomePage'
import {ListTripsPage} from '../Pages/ListTripsPage'
import {LoginPage} from '../Pages/LoginPage'
import {TripDetailsPage} from '../Pages/TripDetailsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="admin/trips/list" element={<AdminHomePage/>}/>        
        <Route path="application" element={<ApplicationFormPage/>}/>       
        <Route path="admin/trips/create" element={<CreateTripPage/>}/>       
        <Route path="trips/list" element={<ListTripsPage/>}/>       
        <Route path="login" element={<LoginPage/>}/>       
        <Route path='admin/trips/:id' element={<TripDetailsPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}
