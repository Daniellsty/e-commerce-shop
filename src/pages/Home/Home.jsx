import React, { useEffect } from 'react'
import HeaderSlider from '../../components/Slider/HeaderSlider'
import { fetchAsyncCategories, getAllCategories } from '../../redux/categorySlice';
import { useSelector } from 'react-redux';
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../redux/productSlice';
import { useDispatch } from 'react-redux';
import { STATUS } from '../../utils/status';
import ProductList from '../../components/ProductList/ProductList';
import './Home.scss'
import Loader from '../../components/Loader/Loader';


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
       
    dispatch(fetchAsyncCategories())
    dispatch(fetchAsyncProducts())
}, [dispatch]);

const categories = useSelector(getAllCategories)
const productStatus = useSelector(getAllProductsStatus)
let products = useSelector(getAllProducts)

const electronicProducts = products.filter((item)=> item.category === 'electronics' )
const jewerlyProducts = products.filter((item)=> item.category === "jewelery")
const menProducts = products.filter((item)=> item.category === `men's clothing` )
const womenProducts = products.filter((item)=> item.category === "women's clothing" )


  return (
    <div>
      <main>
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>See our products</h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {products} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={electronicProducts} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={jewerlyProducts} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={menProducts} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={womenProducts} />}
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home