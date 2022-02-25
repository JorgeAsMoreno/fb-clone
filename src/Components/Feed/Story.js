import { Avatar } from '@material-ui/core'
import React from 'react'
import '../Feed/Story.scss'

const Story = ({ image, name, profileSrc }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className='story'>
      <Avatar
        className='story-avatar'
        src={profileSrc}
      />
      <h4>{name}</h4>
    </div>
  )
}

export default Story
