import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    try {
      return auth.createUserWithEmailAndPassword(email, password)
    } catch (err) {
      console.log(err)
      return false
    }
  }

  const login = (email, password) => {
    try {
      auth.signInWithEmailAndPassword(email, password).then((user) => {
        auth.currentUser.getIdToken().then(token => {
          window.localStorage.setItem('access', token)
        })
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
