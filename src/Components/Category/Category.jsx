

import React from 'react'
import Heading from '../Heading/Heading'
import fruits from '../../assets/fruits-and-veggies.png'
import eggs from '../../assets/dairy-and-eggs.png'
import meat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'


const Category = () => {
  const renderCards = category.map((card, index) => {
    return (
      <div key={index} className=' flex-1 basis-[300px]'>
        <div className=' w-full min-h-[30vh] relative -mb-8'>
          <img src={card.image} alt="" className='absolute bottom-0 '/>
        </div>

        <div className=' bg-zinc-100 pt-17 p-8 rounded-xl'>
          <h3 className=' text-3xl font-bold text-zinc-800'>{card.title}</h3>
          <p className=' text-zinc-600 mt-3 mb-9'>{card.description}</p>

          <Button content={"See All"}/>
        </div>
      </div>
    )
  })
  return (
    <div className=' max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight="Shop" heading="by Catogory" />

      <div className='flex flex-wrap gap-10 md:mt-15 ' >
        {renderCards}
      </div>
    </div>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruits
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: eggs
  },
  {
    id: 3,
    title: 'Meat & Seafood',
    description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meat
  }

]