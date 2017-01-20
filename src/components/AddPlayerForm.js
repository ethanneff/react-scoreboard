// Lib
import React from 'react'

// Component
const AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
    players: React.PropTypes.array.isRequired
  },

  getInitialState: function () {
    return { name: '' }
  },

  onNameChange: function (e) {
    const name = e.target.value
    this.setState({ name: name })
  },

  onSubmit: function (e) {
    if (e) e.preventDefault()

    var players = this.props.players
    for (var i = 0; i < players.length; i++) {
      var player = players[i]
      if (player.name.localeCompare(this.state.name) === 0) {
        return
      }
    }

    this.props.onAdd(this.state.name)
    this.setState({ name: '' })
  },

  render: function () {
    return (
      <div className='add-player-form'>
        <p>{this.players}</p>
        <form onSubmit={this.onSubmit}>
          <input type='text'value={this.state.name} onChange={this.onNameChange} placeholder='Player Name' />
          <input type='submit' value='Add Player' />
        </form>
      </div>
    )
  }
})

// Public
export default AddPlayerForm
