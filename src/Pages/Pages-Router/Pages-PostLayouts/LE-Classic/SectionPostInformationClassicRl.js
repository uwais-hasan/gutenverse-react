import React from 'react';
import {NavLink} from "react-router-dom";

const SectionPostInformationClassicRl = () => {
    return (

        <div className='SectionPostInformationClassicRl'>
            <div className='SectionPostInformationClassic'>
                <div className="absolute-post-content letter-space-2 max-width-margin-articles-none">
                    <p className='margin-top-none'>
                        <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                        <span className="style-global-smallSize">
                        <a className="style-global-smallSize" href="/src/Pages">RICHARD CONNER</a>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink   to='/' className=' style-global-smallSize margin-left-10'>  LIFESTYLE </NavLink>,
                               <NavLink  to='/category/Trending' className=' style-global-smallSize'>  TRENDING </NavLink>
                          </span>
                    </p>
                    <h2 className="style-global-bigSize ">It is very curious to watch this</h2>
                    <p className='para-link'>
                        <NavLink to='/' className="style-global-smallSize" > HOME</NavLink><span className='margin-rightLeft'>→</span>
                        <NavLink  to='/category/LifeStyle' className=' style-global-smallSize'>  LIFESTYLE </NavLink><span className='margin-rightLeft'>→</span>
                        <NavLink to='/category/Video' className="style-global-smallSize" >VIDEOITE</NavLink><span className='margin-rightLeft'>→</span>
                        <span className="style-global-smallSize">AT DAYBREAK OF THE FIFTEENTH DAY OF MY SEARCH</span>
                    </p>
                    <p className="style-global-middleSize letter-space-1 line-height-text ">By the light of the now brilliant moons I saw that he was but a shadow of his former self, and …
                    </p>
                </div>
                <div className='section-coverImage '>
                    <img className='width_100' src='../img-news/woman and man.jpg'/>
                </div>
            </div>
        </div>

    );
};

export default SectionPostInformationClassicRl;