import Nav from "../Nav/Nav";
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './Header.css'

import {useDispatch, useSelector} from "react-redux";
import {updateDrawerLeft, updateDrawerTop} from "../../Redux/Actions";
import {useEffect, useState} from "react";
import useScroll from "../Hooks/useScroll";
import {NavLink} from "react-router-dom";


const Header = () => {
const dispatch=useDispatch();



    return (
        <div className='content-app-header'>
                <div  className='app-header'>
                    <div className='socialMedia'>
                        <a href='https://www.facebock.com'><FacebookIcon fontSize='15px' className='hover-face'/></a>
                        <a href='https://www.twitter.com'><TwitterIcon fontSize='14px' className='hover-twitter'/></a>
                        <a href='https://www.instagram.com'><InstagramIcon fontSize='13px' className='hover-insta'/></a>
                        <a href='https://www.youtube.com/'><YouTubeIcon fontSize='13px' className='hover-youtube'/></a>
                    </div>
                    <div className='img-title'>
                      <NavLink to='/'>  <img src='../../img-news/title-content.png'/></NavLink>
                    </div>
                    <div className='bar-search'>
                        <SearchIcon onClick={() => dispatch(updateDrawerTop(true))}/>
                        {/*<FormatAlignLeftIcon onClick={()=>dispatch(updateDrawerLeft(true))}/>*/}
                    </div>
                </div>
            <Nav/>
        </div>
    );
};

export default Header;