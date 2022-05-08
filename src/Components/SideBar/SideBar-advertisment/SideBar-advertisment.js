import React from 'react';
import './SideBar-advertisment.css'
import {NavLink} from "react-router-dom";
const SideBarAdvertisement = () => {
    return (
        <div className='section-sideBar-SideBarAdvertisement'>
            <h2 className='style-global-title-small border-bottom-gray-heavy'>SideBarAdvertisement</h2>
          <div className='content-img'>
             <NavLink to='/'> <img  src='../img-news/newsSletter/rekl-2.jpg'/></NavLink>
          </div>
        </div>
    );
};

export default SideBarAdvertisement;