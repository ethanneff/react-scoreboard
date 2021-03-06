// Lib
import React from 'react'

// Data
import INITIAL_STATE from '../data/Players'

// Components
import Header from './header/Header'
import Player from './player/Player'
import AddPlayerForm from './AddPlayerForm'

// Component
const Scoreboard = React.createClass({
  getInitialState: function () {
    return INITIAL_STATE
  },

  onScoreChange: function (index, delta) {
    this.state.players[index].score += delta
    this.setState(this.state)
  },

  onAddPlayer: function (name) {
    this.state.players.push({ name: name, score: 0 })
    this.setState(this.state)
  },

  onRemovePlayer: function (index) {
    this.state.players.splice(index, 1)
    this.setState(this.state)
  },

  render: function () {
    return (
      <div className='scoreboard'>
        <Header players={this.state.players} />
        <div className='players'>
          {this.state.players.map(function (player, index) {
            return (
              <Player name={player.name} score={player.score} key={player.name} onScoreChange={(delta) => this.onScoreChange(index, delta)} onRemove={() => this.onRemovePlayer(index)} />
            )
          }.bind(this))}
        </div>
        <AddPlayerForm players={this.state.players} onAdd={this.onAddPlayer} />
      </div>
    )
  }
})

// Public
export default Scoreboard
