import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../Api/ProductsApi'

const SearchList = (props) => {
  const [products, setProducts] = useContext(ProductContext)
  const filteredData = products.filter((prods) => {
    if(props.search === ""){
      return null
    }
    else {
      return prods.name.toLowerCase().includes(props.search)
    }
  })
  return (
    <div className='w-[44vh]  bg-white absolute z-10 top-[5.7rem] right-6 rounded-md overflow-y-scroll min-h-1 max-h-[50vh]'>
      {filteredData.map(p =><Link to={`/product/${p.name}`} >
      <div className='hover:bg-slate-100 w-full flex flex-col items-center justify-center gap-1  p-4 '>
        <div className='flex flex-row justify-between w-full items-center mb-4 '>

          <img className="w-[8vh]" src={p.image_path} />
          <h1 className='font-raleway text-lg '>{p.name}</h1>
          <h1 className='font-raleway text-lg '>{p.price} $</h1>
        </div>
        <hr className='w-2/3 text-black ' />


      </div>
      </Link>)}
    </div>
  )
}

export default SearchList