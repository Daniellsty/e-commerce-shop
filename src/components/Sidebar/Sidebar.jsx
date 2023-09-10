import React, { useEffect } from 'react'
import { getSidebarStatus, setSidebarOff } from '../../redux/sidebarSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import './Sidebar.scss'
import { fetchAsyncCategories, getAllCategories } from '../../redux/categorySlice';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    const dispatch = useDispatch();
   

  const isSidebarOn = useSelector(getSidebarStatus);

  useEffect(() => {
       
    dispatch(fetchAsyncCategories())
}, [dispatch]);

const categories = useSelector(getAllCategories)

  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ""}`}>
    <button type = "button" className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
      <i className='fas fa-times'></i>
    </button>
    <div className='sidebar-cnt'>
      <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>All Categories</div>
      <ul className='cat-list'>
      {
            categories.map((category, idx) => {
              return (
                <li key = {idx} onClick = {() => dispatch(setSidebarOff())}>
                  <NavLink to = {`category/${category}`} className='cat-list-link text-capitalize'>{category.replace("-", " ")}</NavLink>
                </li>
              )
            })
          }
      </ul>
    </div>
  </aside>
  )
}

export default Sidebar