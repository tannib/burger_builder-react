import React from 'react'
import './BuildControl.css'

const BuildControl = ({ label, add, remove, disabled }) => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{label}</div>
      <button className='Less' onClick={remove} disabled={disabled}>
        Less
      </button>
      <button className='More' onClick={add}>
        More
      </button>
    </div>
  )
}

export default BuildControl
