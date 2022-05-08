import React from 'react';
import {NavLink} from "react-router-dom";

const SectionPostInformationCoverRl = () => {
    return (
        <div className='content-post-information '>
            <div className='overlay'> </div>
            <div style={{backgroundImage:  `url("../img-news/cafe-bk.jpg")`}} className='img'> </div>
            <div className="absolute-post-content letter-space-2">
                <p>
                    <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                    <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/' className='margin-rightLeft'> FOOD </NavLink>
                     </span>
                </p>
                <h2 className='style-global-bigTitle text-center max-width-title'>Then going through some small strange motions</h2>
                <p className='para-link'>
                    <a className="style-global-smallSize" href="/src/Pages"> HOME</a><span className='margin-rightLeft color-white-2'>→</span>
                    <a className="style-global-smallSize" href="/src/Pages">FOOD</a><span className='margin-rightLeft color-white-2'>→</span>
                    <span className="style-global-smallSize">THEN GOING THROUGH SOME SMALL STRANGE MOTIONS</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text text-center ">A moderate incline runs towards the foot of Maybury Hill, and down this we<br/> clattered. Once the …</p>
            </div>
        </div>
    );
};

export default SectionPostInformationCoverRl;