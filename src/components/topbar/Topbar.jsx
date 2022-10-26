import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className='logo'>Rainbow</span>
            </div>
            <div className="topbarRight">
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon />    
                    <span className='topbarIconBadge'>
                        2
                    </span>
                </div> 
                <div className='topbarIconContainer'>
                    <LanguageIcon />    
                    <span className='topbarIconBadge'>
                        2
                    </span>
                </div>  
                <div className='topbarIconContainer'>
                    <SettingsIcon />    
                
                </div> 
                <img src='https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='user' className='topbarAvatar'/>    
            </div> 
        </div>
    </div>
  )
}

export default Topbar;