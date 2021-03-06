import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
      </div>
    )
  }
}

export default Bomb;