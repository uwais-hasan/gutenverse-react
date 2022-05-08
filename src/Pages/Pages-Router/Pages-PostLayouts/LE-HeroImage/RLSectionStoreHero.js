import React from 'react';
import {NavLink} from "react-router-dom";

const RlSectionStoreHero = () => {
    return (
        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/I shouted above the sudden noise'}>
                    <img src='../img-news/IconsImg/icon-2.jpg'/>
                </NavLink>
                <NavLink  to={'/main/I shouted above the sudden noise'}>
                    <span className='style-global-text-info-2'>Previous Story</span>I shouted above the sudden noise.</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/Then going through some small strange motions'>
                    <img src='../img-news/IconsImg/icon-9.jpg'/>
                </NavLink>
                <NavLink to={'/main/Then going through some small strange motions'}>
                    <span  className='style-global-text-info-2' >Next Story</span>Then going through some small strange motions</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};

export default RlSectionStoreHero;