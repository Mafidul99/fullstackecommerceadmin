import {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import user1 from '../../assets/images/user1.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBoox from '../SearchBoox';

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../../App';
import UserAvatarImgComponent from '../userAvatarImg';

const Header =()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationsdrop, setisOpenNotificationsdrop] = useState(false);
        const openMyAcc = Boolean(anchorEl);
        const openNotifications = Boolean(isOpenNotificationsdrop);        

        const context = useContext(MyContext);

        const handleOpenMyAccdrop = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleCloseMyAccdrop = () => {
            setAnchorEl(null);
        };

        const handleOpeneNotificationsdrop = () => {
            setisOpenNotificationsdrop(true)
        }
        const handleCloseNotificationsdrop = () => {
            setisOpenNotificationsdrop(false)
        }
        

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                   <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                            <img src={logo}/>
                            <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle mr-3" 
                                onClick={()=>context.setIsToggleSidbar(!context.isToggleSidebar)}>
                                    {
                                        context.isToggleSidebar===false ? <MdMenuOpen/> : 
                                        <MdOutlineMenu/>
                                    }
                                </Button>
                           <SearchBoox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end pl-4 part3">
                            <Button className="rounded-circle mr-3" 
                                onClick={()=>context.setThemeMode(!context.themeMode)}>
                                    {
                                        context.themeMode===false ? <MdOutlineLightMode/> :
                                        <MdDarkMode/>
                                    }
                                
                            </Button>                           
                            <Button className="rounded-circle mr-3" ><IoCartOutline/></Button>
                                                       
                            <Button className="rounded-circle mr-3"><MdOutlineMail/></Button>                           
                            
                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle mr-3"
                                    onClick={handleOpeneNotificationsdrop}><FaRegBell/>
                                </Button>                                
                                    <Menu anchorEl={isOpenNotificationsdrop}
                                            className='notifications dropdown__list'
                                            id="notifications"
                                            open={openNotifications}
                                            onClose={handleCloseNotificationsdrop}
                                            onClick={handleCloseNotificationsdrop}                                        
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >        
                                            <div className="head__titel pl-3 pb-0">
                                                <h4>Notifications(34) </h4> 
                                            </div>
                                            <Divider className="mb-1" /> 
                                            
                                            <div className="scroll">
                                                <MenuItem onClick={handleCloseNotificationsdrop}>
                                                    <div className="d-flex">
                                                        <div>
                                                            <UserAvatarImgComponent img={<user1/>}/>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather betle steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text__sky mb-0'>few seconds ago</p>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                            </div>

                                            <div className="pl-3 pr-3 pt-2 pb-1 w-100">
                                                <Button className="btn__blue w-100">View All Notifications</Button>
                                            </div>                                            
                                    </Menu>  
                            </div>


                                {
                                    context.isLogin !== true ? 
                                        <Link to={'/login'}>
                                            <Button className="btn__blue btn-lg btn-round">
                                                Sign-In
                                            </Button>
                                        </Link>
                                        :
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center" 
                                            onClick={handleOpenMyAccdrop} >
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src={user1}/>
                                                </span>
                                            </div>

                                            <div className="userInfo">
                                                <h4>Mafidul Islam</h4>
                                                <p className="mb-0">@mafidul1990</p>
                                            </div>
                                        </Button>
                                            <Menu anchorEl={anchorEl}
                                                id="account-menu"
                                                open={openMyAcc}
                                                onClose={handleCloseMyAccdrop}
                                                onClick={handleCloseMyAccdrop}                                        
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >                                          
                                                <MenuItem onClick={handleCloseMyAccdrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                    My Account
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccdrop}>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                    Reset Passowrd
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccdrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu> 
                                    </div>
                                }
                        </div>
                   </div>
                </div>
            </header>
        </>
    )
}

export default Header;