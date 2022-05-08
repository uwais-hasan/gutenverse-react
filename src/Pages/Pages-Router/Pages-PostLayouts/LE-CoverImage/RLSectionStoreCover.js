import React from 'react';
import {NavLink} from "react-router-dom";

const RLSectionStoreCover = () => {
    return (
        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/Two long weeks I wandered'}>
                    <img src='../img-news/IconsImg/icon-10.jpg'/>
                </NavLink>
                <NavLink  to={'/main/Two long weeks I wandered'}>
                    <span className='style-global-text-info-2'>Previous Story</span>Two long weeks I wandered</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/The sunset faded to twilight'>
                    <img src='../img-news/IconsImg/icon-11.jpg'/>
                </NavLink>
                <NavLink to={'/main/The sunset faded to twilight'}>
                    <span  className='style-global-text-info-2' >Next Story</span>The sunset faded to twilight</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};

export default RLSectionStoreCover;