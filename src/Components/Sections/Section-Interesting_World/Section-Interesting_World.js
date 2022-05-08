import React, {Fragment} from 'react';
import {Container} from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import './Section-Interesting_World.css'
import {NavLink} from "react-router-dom";
import useResize from "../../Hooks/UseResize";
const SectionInteresting_World = () => {

    const width=useResize(window.innerWidth)
    return (
        <div className='container-home'>
            <span className='span-above-title'>EXPLORE SOME TRENDING ARTICLES</span>
            <h2 className='style-app-title padding-bottom-10'>Interesting World</h2>
            <div className='content-Interesting_World flex-row'>
                <div className='content-info flex-row flex-wrap '>
                    <div className='content width_100'>
                       <NavLink to='/main/He runs towards the Maybury Hill: Embeds'><img className='width_100' src='./img-news/home.jpg'/></NavLink>
                        <div className='info'>
                            <div className="content-info-section ">
                               <NavLink to='/main/What art thrusting that thief-catcher into my face?'>
                                   <h2 className="style-global-bigSize-White " >He runs towards the Maybury Hill: Embeds</h2></NavLink>
                                <p className="style-smallText color-white-2 padding-bottom-20">
                                    <span className="border-bottom ">August 15,</span> 2018,featuce 1,life style,photo</p>
                                {width>768&&<Fragment>
                                    <p className="style-middleTitle-2 color-white-2">At first I regarded little but the road before me,<br/>
                                        and then abruptly my attention was arrested by s…</p>
                                    <p className="read-more absolute-content-span">Read more</p>
                                </Fragment>
                                }
                                </div>
                        </div>
                    </div>
                    <div style={{position:'relative'}} className='content width_47'>
                        <img className='width_100' src='./img-news/bridg.jpg'/>
                        <div className='info'>
                            <div className="content-info-section">
                                <p className="style-smallText color-white-2 padding-bottom-20"><span className="border-bottom">August 15,</span> 2018,featuce 1,life</p>
                                <p className="style-middleTitle-3 margin-none color-white-2">Audio Post: A sigh of satisfaction</p>
                            </div>
                        </div>
                        <VolumeUpIcon className='absolute-content'/>
                    </div>
                    <div style={{position:'relative'}} className='content width_47'>
                        <img className='width_100' src='./img-news/tomato.jpg'/>
                        <div className='info'>
                            <div className="content-info-section">
                                <p className="style-smallText color-white-2 padding-bottom-20"><span className="border-bottom">August 15,</span> 2018,featuce 1,life</p>
                                <p className="style-middleTitle-3 margin-none color-white-2">Audio Post: A sigh of satisfaction</p>
                            </div>

                        </div>
                        <CameraAltIcon className='absolute-content'/>
                    </div>
                </div>
                <div className='content-sideBar'>
                    <p className='border-title'>MOST POPULAR POSTS</p>
                <div className='info-sideBar flex-row gab-10'>
                    <img src='./img-news/someone-river.jpg'/>
                    <div className='side-bar-img flex-column'>
                        <p className="style-middleTitle-3 margin-none">What art thrusting that thief-catcher into my face?</p>
                        <p className="style-smallText "> January 11, 2013</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SectionInteresting_World;