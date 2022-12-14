import React, { useContext } from 'react'
import { ProductContext } from '../Api/ProductsApi'

const SearchList = (props) => {
  const [products, setProducts] = useContext(ProductContext)
  const filteredData = products.filter((prods) => {
    if(props.search === ""){
      return prods
    }
    else {
      return prods.name.toLowerCase().includes(props.search)
    }
  })
  return (
    <div className='w-[40vh]  bg-white absolute z-20 top-20 right-18 rounded-md overflow-y-scroll min-h-[10vh] max-h-[50vh]'>
      {filteredData.map(p => <div className='hover:bg-slate-100 w-full flex flex-col items-center justify-center gap-1  p-4 '>
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