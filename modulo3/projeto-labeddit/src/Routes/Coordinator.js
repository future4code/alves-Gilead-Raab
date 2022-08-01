export const goBack = (navigate) => {
  navigate(-1)
}

export const goToLogin = (navigate) => {
  navigate("/login")
}

export const goToFeed = (navigate) => {
  navigate("/")
}

export const goToRegistration = (navigate) => {
  navigate("/registration")
} 

export const goTopostDetails = (navigate, post) => {
  navigate(`/post/${post.id}`)
}

export const logout = (navigate) => {
  localStorage.removeItem('token')
  goToLogin(navigate)
}