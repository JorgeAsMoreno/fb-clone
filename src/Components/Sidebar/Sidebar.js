import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import '../Sidebar/Sidebar.scss'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <SidebarRow
        src='https://avatars.githubusercontent.com/u/36286673?v=4'
        title='Jorge Moreno'    
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'    
      />
      <SidebarRow
        Icon={EmojiFlagsIcon}
        title='Pages'
      />
      <SidebarRow
        Icon={PeopleIcon}
        title='Friends'
      />
      <SidebarRow
        Icon={ChatIcon}
        title='Messenger'
      />
      <SidebarRow
        Icon={StorefrontIcon}
        title='Marketplace'
      />
      <SidebarRow
        Icon={VideoLibraryIcon}
        title='Videos'
      />
      <SidebarRow
        Icon={ExpandMoreOutlinedIcon}
        title='Marketplace'
      />
    </aside>
  )
}

export default Sidebar