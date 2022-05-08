import React from 'react';
import {NavLink} from "react-router-dom";


import '../../../../Components/Style/Section-post-Information.css'
import {Container} from "@mui/material";

const SectionPostInformationWsCover = () => {
    return (

        <div className='content-post-information '>
            <div className='overlay'></div>
            <div style={{backgroundImage: `url("../img-news/WS-coverImages/ws-coverImg-1.jpg")`}} className='img'></div>
            <div className="absolute-post-content letter-space-2">
                <p>
                    <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                    <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>•  AUGUST 15, 2018</span> •
                          <span className='margin-rightLeft'> 10:16 AM</span>•
                           <NavLink to='/' className='margin-rightLeft'> FEATURED </NavLink>•
                           <NavLink to=''>  food</NavLink> •
                    <span> ONE </span>
                    </span>
                </p>
                <h2 className='style-global-bigTitle text-center max-width-title'>I realized that the crest must be
                    within the range of…</h2>
                <p className='para-link'>
                    <NavLink to='/' className="style-global-smallSize" href="/">
                        HOME
                    </NavLink>
                    <span className='margin-rightLeft color-white-2'>→</span>
                    <NavLink to='/category/Featured' className="style-global-smallSize" href="/">FEATURED
                    </NavLink><span className='color-white-2'>, </span>
                    <NavLink to='/category/Food' className="style-global-smallSize" href="/">FOOD
                    </NavLink><span className='margin-rightLeft color-white-2'>→</span>
                    <span className="style-global-smallSize">AT DAYBREAK OF THE FIFTEENTH DAY OF MY SEARCH</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text ">
                    At that I gripped my wife’s arm, and without ceremony ran her out into the road.
                </p>
            </div>
        </div>

    );
};

export default SectionPostInformationWsCover;

