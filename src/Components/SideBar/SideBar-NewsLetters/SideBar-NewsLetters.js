import React from 'react';
import SingUp from "../../SingUp/SingUp";
import './SideBar-NewsLetters.css'

const SideBarNewsLetters = () => {
    return (
        <div className='section-sideBar-SideBarAdvertisement'>
            <h2  style={{paddingBottom:'20px'}} className='style-global-title-small border-bottom-gray-heavy'>NEWSLETTER</h2>
            <SingUp/>
        </div>
    );
};

export default SideBarNewsLetters;