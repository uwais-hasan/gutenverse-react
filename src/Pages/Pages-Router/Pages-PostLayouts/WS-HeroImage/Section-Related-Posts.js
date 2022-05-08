


import React from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import '../../../../Components/Style/Section-Related-Posts.css'
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";

const SectionRelatedPosts = () => {
    return (
   <Container>
       <div className='section-post-relatedPost'>
           <h3 className='style-global-title '><span className='border-title'>Related</span> Posts</h3>
           <div className="section_Latest_Stories">
               <div className="content">
                   <div className="content-img">
                       <NavLink to='/main/I shouted above the sudden noise'>
                           <img src="../img-news/WS-heroImages/ws-heroImg-9.jpg"/>
                       </NavLink>
                   </div>
                   <div className="content-info">
                       <NavLink to='/main/I shouted above the sudden noise'>  <h2 className="style-title">I shouted above the sudden noise.</h2></NavLink>
                       <span className=" style-global-span-info letter-space-2">FEBRUARY 14, 2019</span>
                       <span className='padding-0-10'>.</span>
                       <NavLink to='/category/Featured' className=" style-global-span-info letter-space-3  ">FEATURED</NavLink> ,
                       <NavLink to='/category/Lifestyle' className=" style-global-span-info letter-space-3  ">LIFESTYLE</NavLink> ,
                       <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3 "> PHOTO </NavLink>
                       <p className="style-global-text-info-3">
                           I shouted above the sudden noise.
                           She looked away from me downhill.
                           The people were coming out …</p>
                   </div>
                   <CameraAltIcon className='absolute-content'/>
               </div>
               <div className="content">
                   <div className="content-img">
                       <NavLink to='/main/It is very curious to watch this'> <img src="../img-news/WS-heroImages/ws-heroImg-10.jpg"/></NavLink>
                   </div>
                   <div className="content-info">
                       <NavLink to='/main/It is very curious to watch this'>  <h2 className="style-title">It is very curious to watch this</h2></NavLink>
                       <span className=" style-global-span-info letter-space-2">DECEMBER 3, 2018</span>
                       <span className='padding-0-10'>.</span>
                       <NavLink to='/category/LifeStyle' className=" style-global-span-info letter-space-3  ">LIFESTYLE </NavLink> ,
                       <NavLink to='/category/Trending' className=" style-global-span-info letter-space-3 "> TRENDING </NavLink>
                       <p className="style-global-text-info-3">
                           By the light of the now brilliant
                           moons I saw that he was but
                           a shadow of his former self, and …</p>
                   </div>

               </div>
               <div className="content">
                   <div className="content-img">
                       <NavLink to='/main/Testing images in the post'>   <img src="../img-news/WS-heroImages/ws-heroImg-11.jpg"/></NavLink>
                   </div>
                   <div className="content-info">
                       <NavLink to='/main/Testing images in the post'>  <h2 className="style-title">Testing images in the post</h2></NavLink>
                       <span className=" style-global-span-info letter-space-2">SEPTEMBER 10, 2018</span>
                       <span className='padding-0-10'>.</span>
                       <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3  "> PHOTO </NavLink> ,
                       <NavLink to='/category/Trending' className=" style-global-span-info letter-space-3  ">TRENDING </NavLink>

                       <p className="style-global-text-info-3">
                           And as the day advanced and
                           the engine drivers and stokers
                           refused to return to London</p>
                   </div>
                   <CameraAltIcon className='absolute-content'/>
               </div>
               <div className="content">
                   <div className="content-img">
                       <NavLink to='/main/Audio Post: A sigh of satisfaction'>  <img src="../img-news/WS-heroImages/ws-heroImg-12.jpg"/></NavLink>
                   </div>
                   <div className="content-info">
                       <NavLink to='/main/Audio Post: A sigh of satisfaction'>  <h2 className="style-title">Audio Post: A sigh of satisfaction</h2></NavLink>
                       <span className=" style-global-span-info letter-space-2">NOVEMBER 3, 2016</span>
                       <span className='padding-0-10'>.</span>
                       <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3 "> PHOTO </NavLink> ,
                       <NavLink to='/category/Trending' className=" style-global-span-info letter-space-3  "> TRENDING </NavLink>

                       <p className="style-global-text-info-3">
                           The nearer moon, hurtling
                           suddenly above the horizon
                           and lighting up the Barsoomian
                           scene, showed m…
                       </p>
                   </div>
                   <VolumeUpIcon className='absolute-content'/>
               </div>
           </div>
       </div>
   </Container>
    );
};

export default SectionRelatedPosts;