import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import '../Feed/Feed.scss'

const Feed = () => {
  return (
    <main className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/36286673?v=4'
        message='Hola'
        timeStamp='Timestamp'
        username='Josomooo'
        image='https://gourmetdemexico.com.mx/wp-content/uploads/2020/12/cerveza-whisky.jpg'

      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/36286673?v=4'
        message='Hola'
        timeStamp='Timestamp'
        username='Josomooo'
        image='https://gourmetdemexico.com.mx/wp-content/uploads/2020/12/cerveza-whisky.jpg'

      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/36286673?v=4'
        message='Hola'
        timeStamp='Timestamp'
        username='Josomooo'
        image='https://gourmetdemexico.com.mx/wp-content/uploads/2020/12/cerveza-whisky.jpg'

      />
    </main>
  )
}

export default Feed
