import React from 'react';
import {NavLink} from "react-router-dom";

const SectionPostInformationWsHeroRs = () => {
    return (

        <div className='content-post-information '>
            <div className='SectionPostInformationWsHeroRs'>
                <div className='overlay'></div>
                <div style={{backgroundImage: `url("../img-news/RS-heroImages/rs-heroImg-1.jpg")`}}
                     className='img'></div>
                <div className="absolute-post-content letter-space-2">
                    <p>
                        <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                        <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/category/Food' className='margin-rightLeft'> FOOD </NavLink>•
                           <NavLink to='/News'>  NEWS</NavLink></span>
                    </p>
                    <h2 className='style-global-bigTitle text-center max-width-title'>Audio Post: A sigh of satisfaction</h2>
                    <p className='para-link'>
                        <a className="style-global-smallSize" href="/src/Pages"> HOME<span className='margin-rightLeft'>→</span></a>
                        <a className="style-global-smallSize" href="/src/Pages">VIDEOITE<span
                            className='margin-rightLeft'>→</span></a>
                        <span className="style-global-smallSize">AT DAYBREAK OF THE FIFTEENTH DAY OF MY SEARCH</span>
                    </p>
                    <p className="style-global-middleSize letter-space-1 line-height-text ">The nearer moon, hurtling suddenly above the horizon and lighting up the Barsoomian scene, showed m…</p>
                </div>
            </div>
        </div>
    );
};

export default SectionPostInformationWsHeroRs;