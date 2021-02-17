import React from "react";
import { connect } from "react-redux";
import {Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const NavBar = ({ currentUser, loggedIn }) => {
  return (

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Guitar Gallery</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/auctions">All Auctions</Nav.Link>
          <Nav.Link as={Link} to="/auctions/new">Add Auction</Nav.Link>
          <Nav.Link as={Link} to="/guitars/new">Add Guitar</Nav.Link>
          <Nav.Link as={Link} to="/guitars">All Guitars</Nav.Link>
        </Nav>
        {loggedIn && (
            <>
              <Navbar.Text id="loggedin">Logged in as {currentUser.attributes.name} &nbsp;</Navbar.Text>
              <Logout />
            </>
          )}
      </Navbar>

  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
