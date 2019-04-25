import React, { Component } from 'react'
import { firebase } from './firebase'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './login'
import FormApp from './form'

import QuestionList from './questionList'
import Transition from './transition'

import Home from './design/components/Home/Home'


import './App.scss'

class App extends Component {
  state = {
    user: null
  }
  changeUserState = (value) => {
    this.setState({
      user: value
    })
  }
  showState = () => {
    console.log(this.state.user)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/form'>New Quiz</Link></li>
            <li><Link to='/quizlist'>Quiz list</Link></li>
            <li><Link to='/transition'>transition</Link></li>
            <li><Link to='/design/components/Home/Home'>Homw</Link></li>

          </ul>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/login' render={() => <Login changeUserState={this.changeUserState} />} />
          <Route path='/quizlist' component={QuestionList} />
          <Route path='/transition' render={() => <Transition />} />
          {this.state.user ? <Route path='/form' render={props => <FormApp changeUserState={this.changeUserState} uid={this.state.user.l} />} /> : <div></div>}
          <Route path='/design/components/Home/Home' render={() => <Home />} />

        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)


export default App
