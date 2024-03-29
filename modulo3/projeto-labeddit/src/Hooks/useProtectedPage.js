import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Routes/Coordinator";


export const useProtectedPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      goToLogin(navigate)
    }
  }, [])

}