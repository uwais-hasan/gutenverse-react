import React, {useEffect} from 'react';
import './Drawer-left.css'
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import {updateDrawerLeft} from "../../Redux/Actions";
import SideBarPopularPost from "../SideBar/SideBarPopularPost/SideBarPopularPost";
import SideBarCategory from "../SideBar/SideBarCategory/SideBarCategory";
import SideBarAdvertisement from "../SideBar/SideBar-advertisment/SideBar-advertisment";
import SideBarNewsLetters from "../SideBar/SideBar-NewsLetters/SideBar-NewsLetters";
import useResize from "../Hooks/UseResize";
const DrawerLeft = () => {
     const{drawerLeft}=useSelector(state=>state)
    const dispatch=useDispatch()




    return (
        // <div className={`content-drawer-left ${drawerLeft?'activeDrawer':'delete'}`}>
        //     {/*<div className='close-box'>*/}
        //     {/*    <span  onClick={()=>dispatch(updateDrawerLeft(!drawerLeft))}*/}
        //     {/*           className='styleMiddleTitle'>close</span>*/}
        //     {/*   <CloseIcon onClick={()=>dispatch(updateDrawerLeft(!drawerLeft))}/>*/}
        //     {/*</div>*/}
        //     {/*<div className='content-sideBar-news'>*/}
        //     {/*    <SideBarCategory title={'section'}/>*/}
        //     {/*    <SideBarPopularPost/>*/}
        //     {/*    <SideBarAdvertisement/>*/}
        //     {/*    <SideBarNewsLetters/>*/}
        //     {/*</div>*/}
        // </div>
        <div>

        </div>
    );
};

export default DrawerLeft;