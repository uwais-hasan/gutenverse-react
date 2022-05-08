import React from 'react';
import {NavLink} from "react-router-dom";

const SectionPostInformationCoverRs = () => {
    return (
        <div className='content-post-information '>
            <div className='overlay'> </div>
            <div style={{backgroundImage:  `url("../img-news/RS-coverImages/rs-coverImg-1.jpg")`}} className='img'> </div>
            <div className="absolute-post-content letter-space-2">
                <p>
                    <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                    <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/category/Photo' className='margin-rightLeft'> PHOTO</NavLink> •
                        <span> 3 COMMENTS</span>
                     </span>
                </p>
                <h2 className='style-global-bigTitle text-center max-width-title'>The great excavation lay far from the plaza</h2>
                <p className='para-link'>
                    <NavLink className="style-global-smallSize" to="/"> HOME</NavLink><span className='margin-rightLeft color-white-2'>→</span>
                    <NavLink className="style-global-smallSize" to="/category/Photo">PHOTO</NavLink><span className='color-white-2 margin-rightLeft'>→</span>
                    <span className="style-global-smallSize">MUST BE IN A MONTH, BUT I SEE NOTHING HERE</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text text-center ">Far from the plaza and in an untenanted portion of the great dead city I had little<br/> trouble in …</p>
            </div>
        </div>
    );
};

export default SectionPostInformationCoverRs;


