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
import PrivateRoute from './Components/PrivateRoute'
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
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/poc' component={() => RegisterGuardian} />
            <PrivateRoute exact path='/qr' component={() => QRGenerator} />
            <Route path='/scan/:uid' component={ScanForm} />
            <Redirect to='/' />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
