import React, { Fragment } from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'

class Comment extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Image imageLink='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8tuXgaydbQu8ALSwdxgnN9MQ4nw906UHSz53opvI88Wg01k5d&usqp=CAU'/>
        <Title name='Harvey Le'/>
        <Description detail='Oh snaps, I did it again'/>
      </Fragment>
     );
  }
}
 
export default Comment;