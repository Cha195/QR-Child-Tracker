import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [currentClientId, setCurrentClientId] = useState('')
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  const signup = (email, password, name, phone) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('name', name)
    formData.append('phone', phone)

    try {
      window.fetch('http://localhost:5000/api/login', {
        body: formData
      }).then((res) => {
        if(res.status === 200) {
          history.pushState('/login')
        } else {
          throw new Error('Error signing ip')
        }
      })
    } catch (err) {
      console.log(err)
      return false
    }
  }

  const login = (email, password) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try {
      window.fetch('http://localhost:5000/api/login', {
        body: formData
      }).then((res) => {
        if(res.status === 200) {
          return res.json()
        } else {
          throw new Error('Error logging in')
        }
      }).then(data => {
        setCurrentClientId(data.uid)
        window.localStorage.setItem('accessToken', data.access)
      })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  const logout = () => {
    try {
      auth.signOut()
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  // const resetPassword = (email) => {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // const updateEmail = (email) => {
  //   return currentUser.updateEmail(email)
  // }

  // const updatePassword = (password) => {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentClientId,
    currentUser,
    login,
    signup,
    logout
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
