import React from 'react';

function Image() {
  return (
    <img 
      src={this.props.imageLink}
      alt='random-person' />
  )
}

export default Image