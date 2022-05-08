import React from 'react';


import '../../../../Components/Style/Section-Store.css'

import {NavLink} from "react-router-dom";
const SectionStore = () => {
    return (
        <div className='content-post-store border-store'>
            <div className='store '>
                <NavLink  to={'/main/The great excavation lay far from the plaza'}>
                    <img src='../img-news/IconsImg/icon-1.jpg'/>
                </NavLink>
                <NavLink  to={'/main/The great excavation lay far from the plaza'}>
                    <span className='style-global-text-info-2'>Previous Story</span>The great excavation lay far from the plaza</NavLink>
                <span className='arrow-size'> ←</span>
            </div>
            <div className='store'>
                <NavLink to='/main/I shouted above the sudden noise'>
                    <img src='../img-news/IconsImg/icon-2.jpg'/>
                </NavLink>
                <NavLink to={'/main/I shouted above the sudden noise'}>
                    <span  className='style-global-text-info-2' >Next Story</span>I shouted above the sudden noise</NavLink>
                <span className='arrow-size'> →</span>
            </div>
        </div>
    );
};

export default SectionStore;