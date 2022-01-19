import React, { useState, useEffect} from 'react'
import NavBar from './Components/NavBar'

const App = (props) => {
  const [ userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
      setUserLoggedIn(!userLoggedIn)
  }

  useEffect (() => {
    if(localStorage.getItem('token')) {
      handleAuth()
    }
  },[])
  // Here if its a truthy value then handleAuth is called, when we reload the useState is false and it becomes false - Means if there is any token present in the localstorage then the state value is set to true if not will be false.

  return (
    <div>
      <h1>User Auth</h1>
      <NavBar userLoggedIn = {userLoggedIn} handleAuth = {handleAuth} />
    </div>
  )
}

export default App