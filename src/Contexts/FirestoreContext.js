import React, { useContext, useState, useEffect } from 'react'
import { db } from '../firebase'
import { useAuth } from './AuthContext'

const FirestoreContext = React.createContext()

export const useFirestore = () => {
  return useContext(FirestoreContext)
}

export const FirestoreProvider = ({ children }) => {
  const [currentClient, setCurrentClient] = useState()
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  const ref = db.collection("Clients")

  const addClient = (userId) => {
    const initialGuardianRef = db.collection('users').doc(userId)
    const initialGuardianData = initialGuardianRef.get().then(doc => {
      if (doc) {
        return doc
      } else {
        return {
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
    if(currentClient) {
      currentClient.add({ Name: name, Email: email, Phone: phone })
    }
  }

  useEffect(() => {
    let docExists = false
    ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach(doc => {
        const docData = doc.data()
        if (docData.userId === currentUser.uid) {
          docExists = true
          setCurrentClient(doc)
        }
        setLoading(false)
      })
    })
    if (!docExists) {
      addClient(currentUser.uid)
      setLoading(false)
    }
  }, []) //eslint-disable-line

  const value = {
    currentClient,
    addClient,
    addGuardian,
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