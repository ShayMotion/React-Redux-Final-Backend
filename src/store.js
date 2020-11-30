import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducer/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myAuctions from './reducers/myAuctions'
import myGuitars from './reducers/myGuitars'
import signupForm from './reducers/signupForm'
import auctionForm from './reducers/auctionForm'
import guitarForm from './reducers/guitarForm'
import  thunk  from 'redux-thunk' 

const reducer = combineReducers({
  currentUser,
  loginForm,
  myAuctions,
  myGuitars,
  signupForm,
  guitarForm,
  auctionForm

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store