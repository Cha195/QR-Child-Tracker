import { Redirect, Route } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUserId } = useAuth()
  console.log(currentUserId)

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUserId
          ? <Component {...props} />
          : <Redirect to='/login' />
      }}
    />
  )
}

export default PrivateRoute
