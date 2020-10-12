import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = ({ ingredients }) => {
  // We transform the ingredients obj into an array with just the names of the values
  let transformedIngredients = Object.keys(ingredients)
    .map((ingredient) => {
      // We return a new array with the length of the ingredients we pass via props
      return [...Array(ingredients[ingredient])].map((_, index) => {
        // We return the BurgerIngredient component with the type of the ingredient and the unique key of the ingredient + the index
        return <BurgerIngredient key={ingredient + index} type={ingredient} />
      })
      // We flatten all the different ingredients arr into the transformedIngredients arr to a unique array
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  // console.log(transformedIngredients)

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
