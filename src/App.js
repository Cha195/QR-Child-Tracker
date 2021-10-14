import './App.css'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Redirect to='/' />
      </BrowserRouter>
    </div>
  )
}

export default App
