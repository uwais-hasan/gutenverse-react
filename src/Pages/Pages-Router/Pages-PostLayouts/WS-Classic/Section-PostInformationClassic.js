import React from 'react';

import '../../../../Components/Style/Section-PostInformationClassic.css'
import {NavLink} from "react-router-dom";
const SectionPostInformationClassic = () => {
    return (
        <div className='SectionPostInformationClassic'>

               <div className="absolute-post-content letter-space-2">
                   <p>
                       <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                       <span className="style-global-smallSize">
                        <NavLink to="/" className="style-global-smallSize" >RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/category/Featured' className='margin-rightLeft'> FEATURED </NavLink>•
                           <span>  4 COMMENTS</span></span>
                   </p>
                   <h2 className="style-global-bigSize ">At daybreak of the fifteenth day of my search</h2>
                   <p className='para-link'>
                       <NavLink  to="/" className="style-global-smallSize"> HOME<span className='margin-rightLeft'>→</span></NavLink>
                       <NavLink  to="/category/Featured" className="style-global-smallSize">FEATURED<span className='margin-rightLeft'>→</span></NavLink>
                       <span className="style-global-smallSize">AT DAYBREAK OF THE FIFTEENTH DAY OF MY SEARCH</span>
                   </p>
                   <p className="style-global-middleSize letter-space-1 line-height-text ">When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay…</p>
               </div>
               <div className='content-img mediaQuery-img text-center'>
                   <img  src='../img-news/WS-Classic/ws-classic-1.jpg'/>
               </div>

        </div>
    );
};

export default SectionPostInformationClassic;