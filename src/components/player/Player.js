// Lib
import React from 'react'

// Components
import Counter from './Counter'

// Component
function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        <a className='remove-player' onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      <div className='player-score'>
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
}

// Public
export default Player
