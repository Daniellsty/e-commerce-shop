import React from 'react';
import { NavLink } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";
import "./Product.scss";

const Product = ({product}) => {

  return (
    <NavLink to = {`/product/${product?.id}`} key = {product?.id}>
      <div className='product-item bg-white'>
        <div className='category'>{product?.category}</div>
        <div className='product-item-img'>
          <img className='img-cover' src = {product?.image} alt = {product.title} />
        </div>
        <div className='product-item-info fs-14'>
          <div className='brand'>
            <span>Brand: </span>
            <span className='fw-7'>{product?.brand}</span>
          </div>
          <div className='title py-2'>
            {product?.title}
          </div>
          <div className='price flex align-center justify-center'>
            <span className='old-price'>
              {formatPrice(product?.price)}
            </span>
           
            <span className='discount fw-1 mx-3'>
              (% 0 Off)
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product