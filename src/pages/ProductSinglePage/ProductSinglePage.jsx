import React, {useEffect, useState} from 'react';
import "./ProductSinglePage.scss";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { STATUS } from '../../utils/status';
import Loader from "../../components/Loader/Loader";
import {formatPrice} from "../../utils/helpers";
import CartMessage from "../../components/CartMessage/CartMessage";
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../../redux/productSlice';
import { addToCart, getAllCarts, getCartMessageStatus, getCartTotal, setCartMessageOff, setCartMessageOn } from '../../redux/cartSlice';
import { getAuthData } from '../../redux/authSlice';


const ProductSinglePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  const user = useSelector(getAuthData)
  const navigate =  useNavigate()
 

  console.log(user);

 
  useEffect(() => {
   
    dispatch(fetchAsyncProductSingle(id));
  }, []);
  useEffect(() => {

    if(cartMessageStatus){
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  if(productSingleStatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }


  
  const addToCartHandler = (product) => {
  
      if(!user.name  ) {
  
        return  navigate('/signup')
        } 


  
   

     let totalPrice = quantity * product?.price;
     
  
     dispatch(addToCart({...product, quantity: quantity, totalPrice}));
     dispatch(setCartMessageOn(true));
     dispatch(getCartTotal())
   

    
  }


  return (
    <main className='py-5 bg-whitesmoke'>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>
            <div className='product-single-l'>
              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img src = {product.image} alt = "" className='img-cover' />
                </div>

                <div className='product-img-thumbs flex align-center my-2'>
                  <div className='thumb-item'>
                    <img src = {product.image } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {product.image } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {product.image } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {product.image } alt = "" className='img-cover' />
                  </div>
                </div>
              </div>
            </div>

            <div className='product-single-r'>
              <div className='product-details font-manrope'>
                <div className='title fs-20 fw-5'>{product?.title}</div>
                <div>
                  <p className='para fw-3 fs-15'>{product?.description}</p>
                </div>
                <div className='info flex align-center flex-wrap fs-14'>
                  <div className='rating'>
                    <span className='text-orange fw-5'>Rating:</span>
                    <span className='mx-1'>
                      {product?.rating?.rate}
                    </span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Brand:</span>
                    <span className='mx-1'>{product?.title}</span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Category:</span>
                    <span className='mx-1 text-capitalize'>
                      {product?.category}
                    </span>
                  </div>
                </div>

                <div className = "price">
                  <div className='flex align-center'>
                    <div className='old-price text-gray'>
                      {formatPrice(product?.price)}
                    </div>
                    <span className='fs-14 mx-2 text-dark'>
                      Inclusive of all taxes
                    </span>
                  </div>

                  <div className='flex align-center my-1'>
                   
                  </div>
                </div>

                <div className='qty flex align-center my-4'>
                  <div className='qty-text'>Quantity:</div>
                  <div className='qty-change flex align-center mx-3'>
                    <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                      <i className='fas fa-minus'></i>
                    </button>
                    <div className = "qty-value flex align-center justify-center">{quantity}</div>
                    <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>
                
                </div>

                <div className='btns'>
                  <button type = "button" className='add-to-cart-btn btn'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='btn-text mx-2' onClick={() => { addToCartHandler(product)}}>add to cart</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  )
}

export default ProductSinglePage