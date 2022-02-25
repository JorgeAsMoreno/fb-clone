import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import '../Feed/MessageSender.scss'

const MessageSender = () => {
  const[input, setInput] = useState('')
  const[image, setImage] = useState('')

  const handleSubmit = e => {
    e.prevenetDefault()
    setImage('')
    setInput('')
  }
  return (
    <div className='messageSender'>
      <div className='messageSender-top'>
        <Avatar
          src='https://avatars.githubusercontent.com/u/36286673?v=4'
        />
        <form>
          <input
            className='messageSender-top_input'
            placeholder="What's on your mind?"
            type='text'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            name='Post content'
          />
          <input
            placeholder='Image URL (Optional)'
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name='Image url'
          />
          <button
            onClick={handleSubmit}
            type='submit'
          >
            handle submit
          </button>
        </form>
      </div>
      <div className='messageSender-bottom'>
        <div className='messageSender-bottom_option'>
          <VideocamIcon style={{ color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender-bottom_option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender-bottom_option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
