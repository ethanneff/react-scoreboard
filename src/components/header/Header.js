// Lib
import React from 'react'

// Components
import Stats from './Stats'
import Stopwatch from './Stopwatch'

// Component
function Header (props) {
  return (
    <div className='header'>
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  )
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired
}

// Public
export default Header
