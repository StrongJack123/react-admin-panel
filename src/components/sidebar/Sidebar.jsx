import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MovingIcon from '@mui/icons-material/Moving';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <div className="sidebarTitle">
                    Dashboard
                </div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon className='sidebarIcon'/> Home
                    </li>
                    <li className="sidebarListItem">
                        <AutoGraphIcon className='sidebarIcon'/>  Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MovingIcon className='sidebarIcon'/>  Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <div className="sidebarTitle">
                    Quick Menu
                </div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <AccountCircleIcon className='sidebarIcon'/> Users
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2OutlinedIcon className='sidebarIcon'/>  Products
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlinedIcon className='sidebarIcon'/>  Transactions
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlinedIcon className='sidebarIcon'/>  Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <div className="sidebarTitle">
                    Notifications
                </div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <EmailOutlinedIcon className='sidebarIcon'/> Mail
                    </li>
                    <li className="sidebarListItem">
                        <ForumOutlinedIcon className='sidebarIcon'/>  Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>  Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <div className="sidebarTitle">
                    Staff
                </div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutlineOutlinedIcon className='sidebarIcon'/> Manage
                    </li>
                    <li className="sidebarListItem">
                        <AutoGraphIcon className='sidebarIcon'/>  Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className='sidebarIcon'/>  Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;