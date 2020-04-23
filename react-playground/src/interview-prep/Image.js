import React from 'react';

const Image = () => {
  return (
    <img 
      className='profile-image'
      src={this.props.imageLink}
      alt='profile-pic'
    />
  )
}

export default Image