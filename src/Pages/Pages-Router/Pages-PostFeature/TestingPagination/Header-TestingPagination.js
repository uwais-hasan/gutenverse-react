import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderTestingPagination = () => {
    return (
        <div className='SectionPostInformationClassic'>

            <div className="absolute-post-content letter-space-2">
                <p>
                    <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                    <span className="style-global-smallSize">
                        <NavLink to="/" className="style-global-smallSize" >RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to="/category/Staff's Picks" className='margin-rightLeft'> STAFF'S PICKS </NavLink>•

                    </span>
                </p>
                <h2 className="style-global-bigSize ">We Are Testing A Pagination Here</h2>
                <p className='para-link'>
                    <NavLink  to="/" className="style-global-smallSize"> HOME<span className='margin-rightLeft'>→</span></NavLink>
                    <NavLink  to="/category/Featured" className="style-global-smallSize">FEATURED<span className='margin-rightLeft'>→</span></NavLink>
                    <span className="style-global-smallSize">We Are Testing A Pagination Here</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text ">When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay…</p>
            </div>
            <div className='content-img mediaQuery-img text-center'>
                <img  src='../img-news/Pagination-img/pagination-1.jpg'/>
            </div>

        </div>
    );
};

export default HeaderTestingPagination;