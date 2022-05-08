import React from 'react';
import {NavLink} from "react-router-dom";

const SectionPostInformationHeroRl = () => {
    return (
            <div className='content-post-information '>
                <div className='SectionPostInformationWsHeroRs'>
                    <div className='overlay'></div>
                    <div style={{backgroundImage: `url("../img-news/OtherPage/Rl-hero-1.jpg")`}}
                         className='img'></div>
                    <div className="absolute-post-content letter-space-2">
                        <p>
                            <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                            <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>•  APRIL 8, 2019</span> •
                          <span className='margin-rightLeft'> 9:31 AM</span>•
                           <NavLink to='/category/LifeStyle' className='margin-rightLeft'>  LIFESTYLE </NavLink>
                       </span>
                        </p>
                        <h2 className='style-global-bigTitle text-center max-width-title'>Two long weeks I wandered</h2>
                        <p className='para-link'>
                            <NavLink className="style-global-smallSize" to="/"> HOME</NavLink>
                            <span className='margin-rightLeft color-white-2'>→</span>
                            <NavLink className="style-global-smallSize" to="/category/Video">VIDEOITE</NavLink>
                            <span className='margin-rightLeft color-white-2'>→</span>
                            <span className="style-global-smallSize">TWO LONG WEEKS I WANDERED</span>
                        </p>
                        <p className="style-global-middleSize letter-space-1 line-height-text ">Through two long weeks I wandered, stumbling through the nights guided only by the stars and hi…</p>
                    </div>
                </div>
            </div>
    );
};

export default SectionPostInformationHeroRl;