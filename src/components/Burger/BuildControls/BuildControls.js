import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl'

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
]

const BuildControls = ({
  addIngredient,
  removeIngredient,
  disabledIngredient,
  price,
  purchasable,
  clicked
}) => {
  return (
    <div className='BuildControls'>
      <p>
        Total price: <strong>${price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => addIngredient(control.type)}
          remove={() => removeIngredient(control.type)}
          disabled={disabledIngredient[control.type]}
        />
      ))}
      <button 
      disabled={!purchasable}
      onClick={clicked} 
      className='OrderButton'>
        ORDER NOW
      </button>
    </div>
  )
}

export default BuildControls
