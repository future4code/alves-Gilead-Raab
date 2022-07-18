
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useProtectedPage = () => {

  const navigate = useNavigate()
    
  const goToLogin = () => {
    navigate("/login")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      goToLogin()
    }
  }, [])
  
}