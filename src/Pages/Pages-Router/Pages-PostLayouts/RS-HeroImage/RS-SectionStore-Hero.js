
import React from 'react';


import '../../../../Components/Style/Section-Store.css'

import {NavLink} from "react-router-dom";
const RsSectionStoreHero = () => {
    return (

        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/She was quite silent for a minute or two'}>
                    <img src='../img-news/IconsImg/icon-3.jpg'/>
                </NavLink>
                <NavLink  to={'/main/She was quite silent for a minute or two'}>
                    <span className='style-global-text-info-2'>Previous Story</span>She was quite silent for a minute or two</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/It must be in a month, but I see nothing here'>
                    <img src='../img-news/IconsImg/icon-4.jpg'/>
                </NavLink>
                <NavLink to={'/main/It must be in a month, but I see nothing here'}>
                    <span  className='style-global-text-info-2' >Next Story</span>It must be in a month, but I see nothing here</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
        );
    };


export default RsSectionStoreHero;