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
                    <span className='topbarIconBadge'>
                        2
                    </span>
                </div>     
            </div> 
        </div>
    </div>
  )
}

export default Topbar;