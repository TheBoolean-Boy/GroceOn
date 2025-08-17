

import React from 'react'
import Heading from '../Heading/Heading'
import fruits from '../../assets/fruits-and-veggies.png'
import eggs from '../../assets/dairy-and-eggs.png'
import meat from '../../assets/meat-and-seafood.png'


const Category = () => {
  return (
    <div className=' py-20'>
    <Heading highlight="Shop" heading = "by Catogory"/>
    </div>
  )
}

export default Category

const category =[
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
    id: 1,
    title: 'Meat & Seafood',
    description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meat
  }

]