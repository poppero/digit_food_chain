import React, { useContext } from 'react'
import { IngredientsContext, ProductContext } from '../Api/ProductsApi'

const OneProduct = props => {
  const [products, setProducts] = useContext(ProductContext)
  const [ingredients, setIngredients] = useContext(IngredientsContext)
  const test = ingredients.filter(i => i.product_id === products.find(p => p.name === props.name).id).map(ig => <h1>{ig.ingredient}</h1>)
  console.log(ingredients)
  return (
    <div class="w-2/3 h-[70vh] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-row items-center p-10">
      <div className='flex flex-col gap-10 w-1/3 justify-center items-center'>
        <img className='w-full h-[40vh]' src={products.find(p => p.name === props.name).image_path} />
        <div className='flex flex-col gap-1 p-2 items-center'>
          <h1 className='font-raleway text-white text-3xl'>{props.name}</h1>
          <h1 className='font-raleway text-white text-3xl'>{products.find(p => p.name === props.name).price}$</h1>
        </div>
      </div>
      <div className='flex flex-col w-1/3 h-full justify-center'>

        <h1 className='font-raleway text-white text-3xl p-2'>Ingredients </h1>
        {ingredients.filter(i => i.product_id === products.find(p => p.name === props.name).id).map(ig =>
          <div className='flex flex-row gap-1 items-center'>
            <h1 className='text-white text-[2rem]'>•</h1>
            <h1 className='font-raleway text-xl text-white font-semibold'>{ig.ingredient}</h1>
          </div>)}
      </div>
      <div className='flex flex-col w-1/3 h-full justify-start '>

<h1 className='font-raleway text-white text-3xl p-2'>Description </h1>
<p className='font-raleway text-white text-center w-full'>hwdddddd dddddddddd dddddd dduwhdu hq uwd hqw idhqwi uhdiuhq iud hqu ih iu hiu wqh duiw hiu whq iu hwiu hiu qh iuqh i hiuq</p>
</div>
    </div>
  )
}

export default OneProduct