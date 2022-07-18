export const goToTrips = (navigate) => {
  navigate("/trips/list")
}

export const goToLogin = (navigate) => {
  navigate("/login")
}

export const goBack = (navigate) => {
  navigate(-1)
}


export const goToApplicationForm = (navigate) => {
  navigate("/application")
}

export const goToTripDetails = (navigate, tripId) => {
  navigate(`/admin/trips/${tripId}`)
}

export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToCreateTrip = (navigate) => {
  navigate("/admin/trips/create")
}