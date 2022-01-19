import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NotesContainer from './NotesContainer'

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props

    return (
        <div>
            <ul>
                <li><Link to = "/"> Home </Link></li>
                {userLoggedIn ? (
                    <>  
                         <li><Link to = "/account"> Account </Link></li>
                         <li><Link to = "/mynotes">My Notes</Link></li>
                        <li><Link onClick = {() => {
                            // To remove the value from the localstorage
                            localStorage.removeItem('token')
                            // Alert the user
                            alert('Successfully logged out')
                            // function to set the state value
                            handleAuth()
                            props.history.push('/')
                            }}> Logout </Link></li>
                    </> //</React.Fragment>
                ): (
                <>
                    <li><Link to = "/register"> Register </Link></li>
                    <li><Link to = "/login"> Login </Link></li>
                </>)}
                
            </ul>

            <Route path = "/" component = {Home} exact = {true} />
            <Route path = "/register" component = {Register} />
            <Route path = "/login" render = {(props) => {
                    return <Login 
                                {...props}
                                // Here if the props are not spread, then the other properties of react router dom like history, location and match will not be passed below
                                handleAuth = {handleAuth}
                      /> 
            }} />
            <Route path = "/mynotes" component = {NotesContainer} />
            <Route path = "/account" component = {Account} />

        </div>
    )
}

// const WrappedComponent = withRouter(NavBar)
// Here withRouter is a higher order component, similar to higher order function
// Higher Order Component - Component which takes another component as an argument or returns the component as its value.

// export default WrappedComponent

export default withRouter(NavBar)