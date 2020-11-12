import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
  <div className="NavBar">
  <NavLink exact activeClassName="active" to="/auctions">My Auctions</NavLink>
  <NavLink exact activeClassName="active" to="/auctions/new">New Auction</NavLink>
  { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
  </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser, 
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)