import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { useDispatch } from 'react-redux'
import { getSidebarStatus, setSidebarOn } from '../../redux/sidebarSlice'
import { useSelector } from 'react-redux'
import { fetchAsyncCategories, getAllCategories } from '../../redux/categorySlice'
import { getAllCarts } from '../../redux/cartSlice'
import CartModal from '../CartModal/CartModal'

const Navbar = () => {

  const carts = useSelector(getAllCarts)
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

    const dispatch = useDispatch();

    useEffect(() => {
       
        dispatch(fetchAsyncCategories())
    }, [dispatch]);

   const categories = useSelector(getAllCategories)
 


  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type = "button" className='sidebar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
            <i className='fas fa-bars'></i>
          </button>
          <NavLink to = "/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Snap</span>Up.
            </span>
          </NavLink>
        </div>

        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type = "text" className='form-control fs-14' placeholder='Search your preferred items here' onChange={(e) => handleSearchTerm(e)} />
              <NavLink to = {`search/${searchTerm}`} className='text-white search-btn flex align-center justify-center'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </NavLink>
            </div>
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
            {
              // taking only first 8 categories
              categories.map((category, idx) => (
                <li className='nav-item no-wrap' key = {idx}>
                  <NavLink to = {`category/${category}`} className='nav-link text-capitalize'>{category.replace("-", " ")}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          <NavLink to = "/cart" className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='cart-items-value'>{carts.length}</div>
            <CartModal carts = {carts} />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar