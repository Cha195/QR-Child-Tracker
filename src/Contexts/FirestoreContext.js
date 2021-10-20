import React, { useContext, useState, useEffect } from 'react'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { useHistory } from 'react-router'

const FirestoreContext = React.createContext()

export const useFirestore = () => {
  return useContext(FirestoreContext)
}

export const FirestoreProvider = ({ children }) => {
  const [currentClient, setCurrentClient] = useState(null)
  const [currentClientId, setCurrentClientId] = useState('')
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  const ref = db.collection('Clients')
  const history = useHistory()

  const addClient = (userId) => {
    const initialGuardianRef = db.collection('users').doc(userId)
    let initialGuardianData
    initialGuardianRef.get().then(doc => {
      if (doc.exists) {
        initialGuardianData = doc.data()
      } else {
        initialGuardianData = {
          Name: '',
          Email: '',
          Phone: ''
        }
      }
    })
    ref.add({ userId: userId }).then(doc => {
      doc.collection('guardians').add(initialGuardianData)
    })
  }

  const addGuardian = (name, email, phone) => {
    if (currentClient) {
      console.log(currentClient)
      return currentClient.collection('guardians').add({ Name: name, Email: email, Phone: phone })
    } else {
      history.pushState('/login')
    }
  }

  useEffect(() => {
    if (currentUser) {
      let docExists = false
      ref.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
          if (doc.exists) {
            const docData = doc.data()
            if (docData.userId === currentUser.uid) {
              docExists = true
              setCurrentClientId(doc.id)
              setCurrentClient(doc.ref)
            }
            setLoading(false)
          }
        })
        if (!docExists) {
          addClient(currentUser.uid)
          setLoading(false)
        }
      })
    }
  }, []) //eslint-disable-line

  const value = {
    currentClientId,
    addGuardian
    // resetGuardian,
    // updateGuardian
  }

  return (
    <FirestoreContext.Provider value={value}>
      {!loading && children}
      {loading && (
        <div className='h-screen w-screen bg-jams_purple flex items-center justify-center'>
          <p className='text-white'>Loading...</p>
        </div>
      )}
    </FirestoreContext.Provider>
  )
}
