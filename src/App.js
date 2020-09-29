import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" 
import NavBar from "./components/NavBar.js"
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyAuctions from './components/MyAuctions.js'
import AuctionCard from './components/AuctionCard.js'
import NewAuctionFormWrapper from './components/NewAuctionFormWrapper.js'
import EditAuctionFormWrapper from './components/EditAuctionFormWrapper.js'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render(){
    const { loggedIn, auctions } = this.props
    return (
   <div> 
   { loggedIn ? <NavBar/> : <Home/> }
   <NavBar/>
   <Switch>
   <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/auctions' component={MyAuctions}/>
   <Route exact path='/auctions/new' component={NewAuctionFormWrapper}/>
   <Route exact path='/auctions/:id' render={props => {

    const auction = auctions.find(auction => auction.id === props.match.params.id)
    console.log(auction)
    return <AuctionCard auction={auction} {...props}/>
    }
   }/>
<Route exact path='/auctions/id/edit' render={props => {
 const auction = auctions.find(auction => auction.id === props.match.params.id)
  return <EditAuctionFormWrapper auction={auction} {...props}/>
}
}/>
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
      auctions: state.myAuctions
  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
