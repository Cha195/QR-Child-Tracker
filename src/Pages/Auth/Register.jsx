import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { css } from '@emotion/react'
import login from '../../Assets/login.svg'
import { useAuth } from '../../Contexts/AuthContext'

const Register = () => {
  const [credentials, setCredentials] = useState({ name: '', email: '', phone: '', password: '' })
  const [visible, setVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [buttonText, setButtonText] = useState('REGISTER')
  const [buttonDisable, setButtonDisable] = useState(true)
  const { signup } = useAuth()
  const history = useHistory()
  const LoaderCss = css`
    display: block;
    margin: 0 auto;
    border-color: #3C43FF;
  `

  const handleChange = (event) => {
    setErrorMessage('')
    const cred = credentials
    cred[event.target.name] = event.target.value
    setCredentials(cred)
    if (cred.email !== '' && cred.password !== '') {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }

  const handleEnter = (event) => {
    if (event.target.name === 'password' && event.key === 'Enter') {
      handleRegister()
    }
  }

  const handleRegister = async () => {
    const { name, email, phone, password } = credentials
    if (email !== '' && password !== '' && name !== '' && phone !== '') {
      setButtonDisable(true)
      setButtonText(<PuffLoader css={LoaderCss} size={24} loading color='white' />)
      try {
        signup(email, password, name, phone).then(registered => {
          setButtonDisable(false)
          setButtonText('REGISTER')
          console.log(registered)
          if(registered) {
            history.push('/login')
          } else {
            throw new Error('Cannot register')
          }
        })
      } catch (err) {
        setButtonText('REGISTER')
        setButtonDisable(false)
        setErrorMessage(err.message)
      }
      // window.fetch(`${baseURL}/user/register`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(credentials)
      // }).then((res) => {
      //   if (res.status !== 200) {
      //     setButtonText('Register')
      //     setButtonDisable(false)
      //     setErrorMessage('Register Error')
      //     throw new Error('Invalid Credentials')
      //   } else {
      //     return res.json()
      //   }
      // }).then(data => {
      //   const now = new Date()
      //   if (data !== undefined && data !== null) {
      //     window.localStorage.setItem('token', data.access)
      //     window.localStorage.setItem('accessExpirationTime', now.getTime() + 86400000)
      //     history.push({
      //       pathname: '/home'
      //     })
      //   }
      // }).catch(err => {
      //   console.error(err)
      //   setErrorMessage(err.message)
      // })
    } else {
      setErrorMessage('Enter Credentials')
    }
  }

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className='h-screen bg-newblue text-white'>
      {/* {
        (window.localStorage.getItem('token') !== undefined &&
        window.localStorage.getItem('token') !== null) &&
        (new Date().getTime() < window.localStorage.getItem('accessExpirationTime')) &&
        history.push('/home')
      }
      <Header /> */}
      <div className='w-screen relative'>
        <div className='ml-28 w-2/5 max-w-xl pt-24'>
          <div>
            <h1 className='font-sora font-bold text-3xl text-left'>SIGN UP</h1>
            <p className='font-sora font-normal mt-3 text-lg text-left'>Already have an account? <a className='underline' href='/login'>Login</a></p>
          </div>
          <div className='mt-5 flex flex-col items-start'>
            <div className='w-full'>
              <p className={`mt-5 text-md font-medium font-sora ${errorMessage.length > 0 ? 'p-3' : ''} text-white text-center bg-red-400 rounded-md`}>{errorMessage}</p>
            </div>
            <input
              type='text'
              name='name'
              className='mt-5 p-3 bg-jams_dark_purple rounded-md outline-none w-full'
              placeholder='Name'
              onChange={handleChange}
              autoComplete='off'
            />
            <input
              type='text'
              name='email'
              className='mt-5 p-3 bg-jams_dark_purple rounded-md outline-none w-full'
              placeholder='Email'
              onChange={handleChange}
              autoComplete='off'
            />
            <input
              type='tel'
              name='phone'
              className='mt-5 p-3 bg-jams_dark_purple rounded-md outline-none w-full'
              placeholder='Phone number'
              onChange={handleChange}
              autoComplete='off'
            />
            <input
              type={visible ? 'text' : 'password'}
              name='password'
              className='mt-5 p-3 bg-jams_dark_purple rounded-md outline-none w-full'
              placeholder='Password'
              onKeyPress={handleEnter}
              onChange={handleChange}
            />
            <div>
              <input
                type='checkbox'
                className='mt-5 mr-1 outline-none rounded'
                id='showPassword'
                name='showPassword'
                onClick={handleClick}
              />
              <label className='showPassword' htmlFor='showPassword'>Show Password</label>
            </div>
            <button
              type='submit'
              onClick={handleRegister}
              disabled={buttonDisable}
              className='w-full p-4 bg-blue-800 font-sora font-bold rounded-md text-white mt-5 mb-8 outline-none cursor-pointer border-2 border-newblue hover:bg-blue-700 hover:text-white hover:border-white disabled:bg-blue-800 disabled:text-gray-400 disabled:border-blue-800 disabled:cursor-default'
            >
              {buttonText}
            </button>
          </div>
        </div>
        <img src={login} alt='Register' className='absolute top-1/4 w-2/5 right-10' />
      </div>
    </div>
  )
}

export default Register
