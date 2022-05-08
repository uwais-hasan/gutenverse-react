import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='content-post-information '>
            <div className='overlay'> </div>
            <div style={{backgroundImage:  `url("../img-news/bg-img.jpg")`}} className='img'> </div>
            <div className="absolute-post-content letter-space-2">
                <p>
                    <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                    <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span> •
                           <NavLink to='/category/Photo' className=''> PHOTO </NavLink>,
                         <NavLink to='/category/Trending' className=''> TRENDING </NavLink>
                     </span>
                </p>
                <h2 className='style-global-bigTitle text-center max-width-title'>Testing images in the post</h2>
                <p className='para-link'>
                    <NavLink to='/' className="style-global-smallSize" href="/"> HOME</NavLink><span className='margin-rightLeft color-white-2'>→</span>
                    <NavLink to="/category/Video" className="style-global-smallSize" >VIDEO</NavLink><span className='margin-rightLeft color-white-2'>→</span>
                    <span className="style-global-smallSize">Testing images in the post</span>
                </p>
                <p className="style-global-middleSize letter-space-1 line-height-text text-center ">And as the day advanced and the engine drivers and stokers refused to return<br/> to London</p>
            </div>
        </div>
    );
};

export default Header;