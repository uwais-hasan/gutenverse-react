import React from 'react';
import {NavLink} from "react-router-dom";

const RsSectionStoreClassic = () => {
    return (
        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/He runs towards the Maybury Hill: Embeds'}>
                    <img src='../img-news/IconsImg/icon-12.jpg'/>
                </NavLink>
                <NavLink  to={'/main/He runs towards the Maybury Hill: Embeds'}>
                    <span className='style-global-text-info-2'>Previous Story</span>He runs towards the Maybury Hill: Embeds</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/A great thing made of gold. Down the hill I saw it.'>
                    <img src='../img-news/IconsImg/icon-13.jpg'/>
                </NavLink>
                <NavLink to={'/main/A great thing made of gold. Down the hill I saw it.'}>
                    <span  className='style-global-text-info-2' >Next Story</span>A great thing made of gold. Down the hill I saw it.</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};

export default RsSectionStoreClassic;