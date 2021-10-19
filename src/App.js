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
import { FirestoreProvider } from './Contexts/FirestoreContext'
import PrivateRoute from './Components/PrivateRoute'
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
// import Navbar from './Components/Navbar'

const App = () => {
  // const [navlinksOpen, setNavlinksOpen] = useState(false)

  const FirestoreContextComponent = (Component) => {
    return (
      <FirestoreProvider>
        <Component />
      </FirestoreProvider>
    )
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          {/* <Navbar
            navlinksOpen={navlinksOpen}
            setNavlinksOpen={setNavlinksOpen}
          />
          {navlinksOpen && (
            <div className='bg-white fixed top-0 left-0 opacity-50 z-30 w-screen h-full transition-all ease-in-out duration-300' />
          )} */}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/poc' component={() => FirestoreContextComponent(RegisterGuardian)}
            />
            <PrivateRoute exact path='/qr' component={() => FirestoreContextComponent(QRGenerator)} />
            <Redirect to='/' />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
