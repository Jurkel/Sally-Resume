import React, { Fragment } from 'react'
import Image from './Image'

class Comment extends React.Component {
  render() { 
    return ( 
      <Fragment className='App'>
        <p>Hello</p>
        <Image 
          imageLink='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8tuXgaydbQu8ALSwdxgnN9MQ4nw906UHSz53opvI88Wg01k5d&usqp=CAU'
        />
        {/* <Title name='Harvey Le'/>
        <Description detail='Oh snaps, I did it again'/> */}
      </Fragment>
     );
  }
}
 
export default Comment;