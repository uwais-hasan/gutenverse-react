import React from 'react';
import {NavLink} from "react-router-dom";

const RsSectionStoreCover = () => {
    return (
        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/We Are Testing A Pagination Here'}>
                    <img src='../img-news/IconsImg/icon-5.jpg'/>
                </NavLink>
                <NavLink  to={'/main/We Are Testing A Pagination Here'}>
                    <span className='style-global-text-info-2'>Previous Story</span>We Are Testing A Pagination Here</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/At daybreak of the fifteenth day of my search'>
                    <img src='../img-news/IconsImg/icon-6.jpg'/>
                </NavLink>
                <NavLink to={'/main/At daybreak of the fifteenth day of my search'}>
                    <span  className='style-global-text-info-2' >Next Story</span>At daybreak of the fifteenth day of my search</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};

export default RsSectionStoreCover;