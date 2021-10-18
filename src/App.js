import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import RegisterGuardian from './Pages/RegisterGuardian'
// import Navbar from './Components/Navbar'

function App () {
  // const [navlinksOpen, setNavlinksOpen] = useState(false)

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar
          navlinksOpen={navlinksOpen}
          setNavlinksOpen={setNavlinksOpen}
        />
        {navlinksOpen && (
          <div className='bg-white fixed top-0 left-0 opacity-50 z-30 w-screen h-full transition-all ease-in-out duration-300' />
        )} */}
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/poc' component={RegisterGuardian} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
