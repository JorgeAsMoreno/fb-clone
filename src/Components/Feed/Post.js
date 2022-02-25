import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import '../Feed/Post.scss'
const Post = ({
  profilePic,
  image,
  username,
  timeStamp,
  message
}) => {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar
          className="post-top__avatar"
          src={profilePic}
        />
        <div className="post-top__info">
          <h3>{username}</h3>
          <p>{timeStamp}</p>
        </div>
      </div>

      <div className="post-bottom">
        <p>{message}</p>
      </div>

      <div className="post-image">
        <img
          alt="Post"
          src={image}
        />
      </div>
      <div className="post-options">
        <div className="post-options__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-options__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post-options__option">
          <NearMeIcon />
          <p>Like</p>
        </div>
        <div className="post-options__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Post
