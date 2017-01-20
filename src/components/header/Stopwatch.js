// Lib
import React from 'react'

// Component
const Stopwatch = React.createClass({
  getInitialState: function () {
    return ({
      running: false,
      previouseTime: 0,
      elapsedTime: 0
    })
  },

  componentDidMount: function () {
    this.interval = setInterval(this.onTick)
  },

  componentWillUnmount: function () {
    clearInterval(this.interval)
  },

  onStart: function () {
    this.setState({
      running: true,
      previousTime: Date.now()
    })
  },

  onStop: function () {
    this.setState({
      running: false
    })
  },

  onReset: function () {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now()
    })
  },

  onTick: function () {
    if (this.state.running) {
      var now = Date.now()
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now()
      })
    }
  },

  render: function () {
    var seconds = Math.floor(this.state.elapsedTime / 1000)
    return (
      <div className='stopwatch' >
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'> {seconds} </div>
        { this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button> }
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
})

// Public
export default Stopwatch
