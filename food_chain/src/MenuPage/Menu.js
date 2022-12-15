import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CategoriesContext, ProductContext } from '../Api/ProductsApi'

const Menu = () => {
  const [products, setProducts] = useContext(ProductContext)
  const [categories, setCategories] = useContext(CategoriesContext)
  console.log(categories)
  
  return (
    <div className='w-screen h-screen flex flex-col gap-1'>
      <div className='flex flex-row gap-1 text-white items-center justify-center mt-[9rem]'>
        <hr className='text-white w-1/3' />
        <h1 className='font-raleway text-white p-8 font-bold text-[2.7rem]'>Steaks</h1>
        <hr className='text-white w-1/3' />
      </div>
      <div className='grid grid-cols-4 gap-2 ml-6 p-6'>
        {products.filter(p => p.category_id === 1).map(pro =>
          <Link to={`/product/${pro.name}`} >
            <div class="w-[45vh] h-[60vh]  bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-around items-center hover:opacity-80 p-4">
            <img className="w-2/3" src={pro.image_path} />
            <div className='flex flex-col justify-center items-center '>
              <h1 className='font-raleway text-white text-3xl font-semibold'>{pro.name}</h1>
              <h1 className='font-raleway text-white text-2xl font-semibold'>Price {pro.price}$</h1>
              <h1 className='font-raleway font-semibold text-white p-4 text-center'>{pro.description}</h1>
            </div>
          </div>
          </Link>
        )}

      </div>
      <div className='flex flex-row gap-1 text-white items-center justify-center'>
        <hr className='text-white w-1/3' />
        <h1 className='font-raleway text-white p-8 font-bold text-[2.7rem]'>Pizzas</h1>
        <hr className='text-white w-1/3' />
      </div>
      <div className='grid grid-cols-4 gap-2 ml-6 p-6'>
        {products.filter(p => p.category_id === 2).map(pro =>
          <Link to={`/product/${pro.name}`} >
          <div class="w-[45vh] h-[60vh]  bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-around items-center hover:opacity-80 p-4">
            <img className="w-2/3 rounded-full" src={pro.image_path} />
            <div className='flex flex-col justify-center items-center '>
              <h1 className='font-raleway text-white text-3xl font-semibold'>{pro.name}</h1>
              <h1 className='font-raleway text-white text-2xl font-semibold'>Price {pro.price}$</h1>
              <h1 className='font-raleway font-semibold text-white p-4 text-center'>{pro.description}</h1>
            </div>
          </div>
          </Link>
        )}


      </div>
      <div className='flex flex-row gap-1 text-white items-center justify-center'>
        <hr className='text-white w-1/3' />
        <h1 className='font-raleway text-white p-8 font-bold text-[2.7rem] '>Cakes</h1>
        <hr className='text-white w-1/3' />
      </div>
      <div className='grid grid-cols-4 gap-2 ml-6 p-6'>
        {products.filter(p => p.category_id === 3).map(pro =>
         <Link to={`/product/${pro.name}`} >
         <div class="w-[45vh] h-[60vh] mb-[10rem] bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-around items-center hover:opacity-80 p-4">
            <img className="w-2/3 rounded-full" src={pro.image_path} />
            <div className='flex flex-col justify-center items-center '>
              <h1 className='font-raleway text-white text-3xl font-semibold'>{pro.name}</h1>
              <h1 className='font-raleway text-white text-2xl font-semibold'>Price {pro.price}$</h1>
              <h1 className='font-raleway font-semibold text-white p-4 text-center'>{pro.description}</h1>
            </div>
          </div>
          </Link>
        )}


      </div>
    </div>
  )
}

export default Menu