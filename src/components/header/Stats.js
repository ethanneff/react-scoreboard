// Lib
import React from 'react'

// Component
function Stats (props) {
  const playerCount = props.players.length
  const totalPoints = props.players.reduce(function (total, player) {
    return total + player.score
  }, 0)

  return (
    <table className='stats'>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{playerCount}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired
}

// Public
export default Stats
