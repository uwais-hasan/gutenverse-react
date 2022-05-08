import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className= 'SectionPostInformationClassic'>
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
                <h2 className="style-global-bigSize ">He runs towards the Maybury Hill: Embeds</h2>
                <p className='para-link'>
                    <NavLink  to="/" className="style-global-smallSize"> HOME<span className='margin-rightLeft'>→</span></NavLink>
                    <NavLink  to="/category/Featured" className="style-global-smallSize">FEATURED<span className='margin-rightLeft'>→</span></NavLink>
                    <span className="style-global-smallSize">HE RUNS TOWARDS THE MAYBURY HILL: EMBEDS</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text ">
                    At first I regarded little but the road before me, and then abruptly my attention was arrested by s…
                </p>
            </div>
        </div>
    );
};

export default Header;