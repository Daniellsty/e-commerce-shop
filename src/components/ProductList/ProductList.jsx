import React, { useEffect } from 'react';
import "./ProductList.scss";
import Product from "../Product/Product";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchAsyncProductsOfCategory, getAllProductsByCategory } from '../../redux/categorySlice';

const ProductList = ({products}) => {
  
  return (
    <div className='product-lists grid bg-whitesmoke my-3'>
      {
        products?.map(product => {
        

          return (
            <Product key = {product.id} product = {product} />
          )
        })
      }
    </div>
  )
}

export default ProductList