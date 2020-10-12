import React, { Component } from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal'
import OrderSummary from '../components/Burger/OrderSummary'

const ingredient_prices = {
  salad: 0.3,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.5,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    // We sum all the value of the the ingredients obj in the state by creating an new arr
    const sum = Object.keys(ingredients)
      // Mapping through the new arr and returning the value of each key
      .map((ingredient) => ingredients[ingredient])
      // Reducing the arr to a single value, the sum
      .reduce((sum, curr) => {
        return sum + curr
      }, 0)

    // We set the new state of purchasable to true if sum is greater than 0
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    // oldCount keeps track of the previous count of the ingredient
    const oldCount = this.state.ingredients[type]

    // updatedCount adds one to the previous count
    const updatedCount = oldCount + 1

    // updatedIngredients makes a copy of the ingredients obj
    const updatedIngredients = {
      ...this.state.ingredients,
    }

    // We update the specific updatedIngredients with his updatedCount
    updatedIngredients[type] = updatedCount

    // priceAddiction keeps track of the price of the specific ingredient
    const priceAddiction = ingredient_prices[type]

    // oldPrice keeps track of the previous totalPrice
    const oldPrice = this.state.totalPrice

    // newPrice sums the oldPrice with the priceAddiction
    const newPrice = oldPrice + priceAddiction

    // We update the ingredients state and the totalPrice state with setState
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })

    // We call the updatePurchaseState method passing the updatedIngredients as a property
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    // oldCount keeps track of the previous count of the ingredient
    const oldCount = this.state.ingredients[type]

    // Avoiding the app to block by removing an ingredient which is already at 0
    if (oldCount <= 0) {
      return
    }

    // updatedCount removes one to the previous count
    const updatedCount = oldCount - 1

    // updatedIngredients makes a copy of the ingredients obj
    const updatedIngredients = {
      ...this.state.ingredients,
    }

    // We update the specific updatedIngredients with his updatedCount
    updatedIngredients[type] = updatedCount

    // priceDeduction keeps track of the price of the specific ingredient
    const priceDeduction = ingredient_prices[type]

    // oldPrice keeps track of the previous totalPrice
    const oldPrice = this.state.totalPrice

    // newPrice subtracts the oldPrice with the priceDeduction
    const newPrice = oldPrice - priceDeduction

    // We update the ingredients state and the totalPrice state with setState
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })

    // We call the updatePurchaseState method passing the updatedIngredients as a property
    this.updatePurchaseState(updatedIngredients)
  }

  addModalHandler = () => {
    this.setState({purchasing : true})
  }

  removeModalHandler = () => {
    this.setState({purchasing : false})
  }

  purchaseContinued = () => {
    this.setState({purchasing : false})
  }

  render() {
    // We make a copy of the ingredients obj in state
    const ingredients = {
      ...this.state.ingredients,
    }

    // // We create a new arr from the new ingredients obj and loop through it to get a boolean value if an ingredient is < or = 0
    Object.keys(ingredients).map(ingredient => 
      // if ingredients[ingredient] returns true, it will disabled the button in the build control
      ingredients[ingredient] = ingredients[ingredient] <= 0
      )

    // // Loop through ingredients to get a boolean value if an ingredient is < or = 0
    // for (let ingredient in ingredients) {
    //   // if ingredients[ingredient] returns true, it will disabled the button in the build control
    //   ingredients[ingredient] = ingredients[ingredient] <= 0
    // }

    return (
      <div className='BurgerBuilder'>
        <Modal show={this.state.purchasing} clicked={this.removeModalHandler} >
          <OrderSummary ingredients={this.state.ingredients} purchaseCancelled={this.removeModalHandler} purchaseContinued={this.purchaseContinued} price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledIngredient={ingredients}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          clicked={this.addModalHandler}
        />
      </div>
    )
  }
}

export default BurgerBuilder
