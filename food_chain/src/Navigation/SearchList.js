import React, { useContext } from 'react'
import { ProductContext } from '../Api/ProductsApi'

const SearchList = () => {
  const [products, setProducts] = useContext(ProductContext)
  return (
    <div className='w-[40vh] h-[50vh] bg-white absolute z-20 top-20 right-18 rounded-md overflow-y-scroll'>
      {products.map(p => <div className='hover:bg-slate-100 w-full flex flex-col items-center justify-center gap-1 min-h-[10vh] max-h-[50vh] p-4 '>
        <div className='flex flex-row justify-between w-full items-center mb-4 '>

          <img className="w-[8vh]" src={p.image_path} />
          <h1 className='font-raleway text-lg '>{p.name}</h1>
          <h1 className='font-raleway text-lg '>{p.price} $</h1>
        </div>
        <hr className='w-2/3 text-black ' />


      </div>)}
    </div>
  )
}

export default SearchList