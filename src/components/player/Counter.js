// Lib
import React from 'react'

// Component
function Counter (props) {
  return (
    <div className='counter' >
      <button className='counter-action decrement' onClick={() => props.onChange(-1)}>
        -
      </button>
      <div className='counter-score'>
        {props.score}
      </div>
      <button className='counter-action increment' onClick={() => props.onChange(1)}>
        +
      </button>
    </div>
  )
}

Counter.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  score: React.PropTypes.number.isRequired
}

// Public
export default Counter
