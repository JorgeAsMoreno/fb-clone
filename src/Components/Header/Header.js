import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core'
import '../Header/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-left'>
        <img
          alt='Facebook logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
        />
        <div className='header-left_input'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search Facebook...'
          />
        </div>
      </div>
      <div className='header-middle'>
        <div className='header-middle_option header-middle_option__active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header-middle_option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header-middle_option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header-middle_option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header-middle_option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>
      <div className='header-right'>
        <div className='header-right_info'>
          <Avatar
            src='https://avatars.githubusercontent.com/u/36286673?v=4'
          />
          <h4>Jorge</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </header>
  )
}

export default Header