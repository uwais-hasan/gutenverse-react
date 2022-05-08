import React from 'react';
import {NavLink} from "react-router-dom";

const RsSectionStoreClassic = () => {
    return (
        <div className='content-post-store border-store max-width-none-important'>
            <div className='store '>
                <NavLink  to={'/main/Always the same impassible member'}>
                    <img src='../img-news/IconsImg/icon-7.jpg'/>
                </NavLink>
                <NavLink  to={'/main/Always the same impassible member'}>
                    <span className='style-global-text-info-2'>Previous Story</span>Always the same impassible member</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/And we men, the creatures who inhabit this earth'>
                    <img src='../img-news/IconsImg/icon-8.jpg'/>
                </NavLink>
                <NavLink to={'/main/And we men, the creatures who inhabit this earth'}>
                    <span  className='style-global-text-info-2' >Next Story</span>And we men, the creatures who inhabit this earth</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};
export default RsSectionStoreClassic;