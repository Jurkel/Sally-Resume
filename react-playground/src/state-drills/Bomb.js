import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    current: 'word'
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <p>{this.state.current}</p>
      </div>
    )
  }
}

export default Bomb;