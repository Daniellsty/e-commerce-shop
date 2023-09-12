import React from 'react';
import './AuthMessage.scss'
import { correct } from "../../utils/images";

const AuthMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className='cart-message-icon'>
        <img src = {correct} alt = "" />
      </div>
      <h6 className='text-white fs-14 fw-5'>you have been signed up successfully !</h6>
    </div>
  )
}

export default AuthMessage