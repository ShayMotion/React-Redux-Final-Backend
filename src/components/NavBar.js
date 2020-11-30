import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
  <div className="NavBar">
  <NavLink exact activeClassName="active" to="/auctions">All Auctions</NavLink>
  <NavLink exact activeClassName="active" to="/auctions/new">Add Auction</NavLink>
  <NavLink exact activeClassName="active" to="/guitars/new">Add Guitar</NavLink>
  <NavLink exact activeClassName="active" to="/guitars">All Guitars</NavLink>
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