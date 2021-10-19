import { Redirect, Route } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  return (
    <Route
      { ...rest }
      render={(props) => {
        return currentUser 
          ? <Component {...props} />
          : <Redirect to='/login' />
      }}
    />
  )
}

export default PrivateRoute
