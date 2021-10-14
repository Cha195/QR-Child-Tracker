import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = ({
  navlinksOpen,
  setNavlinksOpen
}) => {
  const [startAnimation, setStartAnimation] = useState(true)
  const location = useLocation()
  const history = useHistory()

  const pathname = location.pathname
  const [navbarBg, setNavbarBg] = useState(false)

  const navbarMobileRef = useRef(null)

  // route we should go to
  const [destination, setDestination] = useState(pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarMobileRef.current &&
        !navbarMobileRef.current.contains(event.target)
      ) {
        setNavlinksOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarMobileRef, setNavlinksOpen])

  const handleClick = (route) => {
    if (!startAnimation) {
      const dest = route
      const currentStation = pathname
      setNavlinksOpen(false)

      if (dest && currentStation !== dest) {
        setStartAnimation(true)
        setDestination(dest)
      }
    }
  }

  useEffect(() => {
    history.push(destination)
    setStartAnimation(false)
  }, [destination, history])

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
    }
  })

  const handleNavbarOpen = () => {
    setNavlinksOpen(!navlinksOpen)
  }

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed z-40 h-16 lg:h-20 w-full ${navbarBg ? 'bg-indigo-900 bottom-shadow' : ''} transition-all duration-300 ease-in-out`}
      >
        {/* Navbar Mobile */}
        <div>
          <div className='z-40 w-36 h-full lg:hidden'>
            {/* Hamburger */}
            <div
              onClick={handleNavbarOpen}
              className='z-40 flex flex-col mt-5 ml-5 justify-between w-8 h-5 transition-all ease-in-out duration-300 cursor-pointer lg:invisible'
            >
              <span
                className='h-1 w-full rounded-lg bg-black'
              />
              <span
                className='h-1 w-full rounded-lg bg-black'
              />
              <span
                className='h-1 w-full rounded-lg bg-black'
              />
            </div>
            {/* Links mobile */}
            <div
              ref={navbarMobileRef}
              className={`bg-white text-black w-60 h-full flex flex-col font-sora items-center text-left top-0 z-60 transition-all ease-in-out duration-300 ${
                navlinksOpen ? 'left-0 fixed' : '-left-96 absolute'
              }`}
            >
              <div className='close' onClick={handleNavbarOpen} />
              <h4
                className={`nav-link ${
                  pathname === '/' && 'nav-link-active'
                } mt-32 mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/')}
              >
                Home
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/about' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/about')}
              >
                About Us
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/timeline' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/timeline')}
              >
                Timeline
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/faq' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/faq')}
              >
                FAQ
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/sponsors' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/sponsors')}
              >
                Sponsors
              </h4>
            </div>
          </div>

          {/* Navbar desktop */}
          <div className='flex fixed items-center right-44 font-sora z-50 transition-all ease-in-out duration-300 top-6'>
            <div
              className='hidden lg:flex text-black'
            >
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/')}
              >
                Home
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/about' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/about')}
              >
                About Us
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/timeline' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/timeline')}
              >
                Timeline
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/faq' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/faq')}
              >
                FAQ
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/sponsors' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/sponsors')}
              >
                Sponsors
              </h4>
            </div>

            {/* Login button */}
            <div className='cursor-pointer z-50 px-10 py-2 rounded-md text-white border-solid text-lg font-bold font-sora border-2 bg-red-500 border-red-500 2xl:text-xl hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 ease-in-out'>
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
