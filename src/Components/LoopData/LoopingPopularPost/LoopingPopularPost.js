import React from 'react';
import './LoopingPopularPost.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateDrawerLeft} from "../../../Redux/Actions";
const LoopingPopularPost = ({img,title,history,id}) => {

const{drawerLeft}=useSelector(state=>state)
    const dispatch=useDispatch()

    const closeDispatch=()=>{
        if (drawerLeft===true){
            dispatch(updateDrawerLeft(false))
        }
    }
    return (
        <div className='section-popular-post border-bottom-gray'>
            <div className='content-img'>

                <NavLink  to={`/main/${title}`}> <img src={img}/></NavLink>
            </div>
            <div className='content-info'>
               <NavLink onClick={closeDispatch} to={`/main/${title}`}><h2  className='style-sideBar-popular'>{title}</h2></NavLink>
                <p className='style-sideBar-popular-history opacity-07'>{history}</p>
                <p className='number-section'>{id}</p>
            </div>
        </div>
    );
};

export default LoopingPopularPost;