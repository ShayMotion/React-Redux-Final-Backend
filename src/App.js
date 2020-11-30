import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js" 
import NavBar from "./components/NavBar.js"
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyAuctions from './components/MyAuctions.js'
import MyGuitars from './components/MyGuitars.js'
import AuctionCard from './components/AuctionCard.js'
import GuitarCard from './components/GuitarCard.js'
import NewGuitarFormWrapper from './components/NewGuitarFormWrapper.js'
import NewAuctionFormWrapper from './components/NewAuctionFormWrapper.js'
import EditAuctionFormWrapper from './components/EditAuctionFormWrapper.js'
import EditGuitarFormWrapper from './components/EditGuitarFormWrapper.js'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, auctions, guitars } = this.props
    return (
   <div className="App"> 
   { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
   <Switch>
   <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/auctions' component={MyAuctions}/>
   <Route exact path='/guitars' component={MyGuitars}/>
   <Route exact path='/auctions/new' component={NewAuctionFormWrapper}/>
   <Route exact path='/guitars/new' component={NewGuitarFormWrapper}/>
   <Route exact path='/auctions/:id' render={props => {

    const auction = auctions.find(auction => auction.id === props.match.params.id)
    console.log(auction)
    return <AuctionCard auction={auction} {...props}/>
    }
   }/>
    <Route exact path='/guitars/:id' render={props => {

const guitar = guitars.find(guitar => guitar.id === props.match.params.id)
console.log(guitar)
return <GuitarCard guitar={guitar} {...props}/>
}
}/>
<Route exact path='/auctions/id/edit' render={props => {
 const auction = auctions.find(auction => auction.id === props.match.params.id)
  return <EditAuctionFormWrapper auction={auction} {...props}/>
}
}/>
<Route exact path='/guitars/id/edit' render={props => {
 const guitar = guitars.find(guitar => guitar.id === props.match.params.id)
  return <EditGuitarFormWrapper guitar={guitar} {...props}/>
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
