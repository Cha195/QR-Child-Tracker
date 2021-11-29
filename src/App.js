import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import RegisterGuardian from './Pages/RegisterGuardian'
import 'react-phone-number-input/style.css'
import QRGenerator from './Pages/QRGenerator'
import { AuthProvider } from './Contexts/AuthContext'
import Navbar from './Components/Navbar'
// import PrivateRoute from './Components/PrivateRoute'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import ScanForm from './Pages/ScanForm'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/poc' component={RegisterGuardian} />
            <Route exact path='/qr' component={QRGenerator} />
            <Route path='/scan/:cid' component={ScanForm} />
            <Redirect to='/' />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
