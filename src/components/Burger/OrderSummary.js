import React from 'react'
import Button from '../UI/Button'

const OrderSummary = ({ingredients, price, purchaseCancelled, purchaseContinued}) => {
    // We create a new arr with the Object.keys method and we pass as a prop the ingredients props
    const ingredientSummary = Object.keys(ingredients)
    // We map through the arr and we return the li element with the ingredient key and the ingredient value
        .map(ingredient => 
        <li key={ingredient}><span style={{textTransform : 'capitalize'}}>{ingredient}: </span>{ingredients[ingredient]}</li>)

    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
        Total price: <strong>${price.toFixed(2)}</strong>
      </p>
            <p>Continue to checkout?</p>
        <Button clicked={purchaseCancelled} btnType={'Danger'}>CANCEL</Button>
        <Button clicked={purchaseContinued} btnType={'Success'}>CONTINUE</Button>
        </div>
    )
}

export default OrderSummary
