import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import { getAuthData } from '../../redux/authSlice'

const Header = () => {

  const user = useSelector(getAuthData)
  console.log(user);


    return (
      <header className='header text-white'>
        <div className='container'>
          <div className='header-cnt'>
            <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
              <div className='header-cnt-top-l'>
                <ul className='flex top-links align-center'>
                  <li>
                    {/* dummy links */}
                    <p >Seller Center</p>
                  </li>
                  <li className='vert-line'></li>
                  <li>
                    {/* dummy links */}
                    <p >Download</p>
                  </li>
                  <li className='vert-line'></li>
                  <li className='flex align-center'>
                    <span className='fs-13'>Follow us on</span>
                    <ul className='social-links flex align-center'>
                      <li className='mx-2'>
                        <a href = "www.facebook.com" className='fs-15'>
                          <i className='fab fa-facebook'></i>
                        </a>
                      </li>
                      <li className='mx-2'>
                        <a href = "www.instagram.com" className='fs-15'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='header-cnt-top-r'>
                <ul className='top-links flex align-center'>
                  <li>
                    <div to = "/" className='top-link-itm'>
                      <span className='top-link-itm-ico mx-2'>
                        <i className='fa-solid fa-circle-question'></i>
                      </span>
                      <span className='top-link-itm-txt'>Support</span>
                    </div>
                  </li>
                 
                {
                  user.name  ? 
                   <>
                     <li className='vert-line'></li>
                  <li >
                     <span  className='top-link-itm-txt'>{user.name}</span>
                  </li>
                   </>

                  : 

                  (

                  <>
                    <li className='vert-line'></li>
                    <li>
                      <NavLink to = "/signup">
                        <span className='top-link-itm-txt'>Register</span>
                      </NavLink>
                    </li>
                    <li className='vert-line'></li>
                    <li>
                      <NavLink to = "/signup">
                        <span className='top-link-itm-txt'>Log in</span>
                      </NavLink>
                    </li>
                  </>

                  )
                }

                </ul>
              </div>
            </div>
  
            <div className='header-cnt-bottom'>
              
            </div>
          </div>
        </div>
        <Navbar/>
      </header>
    )
  }
  
  export default Header