import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button, TextField} from "@mui/material";
import SingUp from "../SingUp/SingUp";
const Footer = () => {
    return (
           <div className='content-footer '>
               <div className='footer-socialMedia flex-row gab-30' >
                   <a className='flex-row align-center hover-face' href='https://www.facebook.com/profile.php?id=100010097286350'><FacebookIcon /><span>faceBook</span></a>
                   <a className='flex-row align-center hover-twitter' href=''><TwitterIcon /><span>twitter</span></a>
                   <a  className='flex-row align-center hover-insta'href=''><InstagramIcon/><span>instagram</span></a>
                   <a className='flex-row align-center hover-youtube' href=''><YouTubeIcon/><span>youtube</span></a>
               </div>
               <div className='footer-input'>
                   <SingUp/>

               </div>
               <div className='footer-copyright'>
                   <p className='style-smallText-2'>If you are using GutenVerse theme for WordPress, you will love it!<br/><br/>
                       © 2019 - 2022 GutenVerse™ Uwais hasan</p>
               </div>
           </div>
    );
};

export default Footer;
