import React from 'react';
import './Section_Latest Stories.css'
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";



const Section_LatestStories = () => {
    return (
        <div className='container-home'>
            <span className='span-above-title'>Browse and read the latest stuff</span>
            <h2 className='style-app-title'>Latest Stories</h2>

        <div className='section_Latest_Stories padding-top'>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/The sunset faded to twilight'>
                        <img src='../img-news/category-trending/photo-1.jpg'/>
                    </NavLink>
                </div>
                <div className='content-info'>
                    <NavLink to='/main/The sunset faded to twilight'> <h2 className='style-middleTitle'>The sunset faded to twilight</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/The sunset faded to twilight'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/Then going through some small strange motions'>  <img src='./img-news/Link-img/link-2.jpg'/></NavLink>

                </div>
                <div className='content-info margin-absolute'>
                    <NavLink to='/main/Then going through some small strange motions'><h2 className='style-middleTitle'>Then going through some small strange motions</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/Then going through some small strange motions'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/Two long weeks I wandered'>  <img src='./img-news/Link-img/link-1.jpg'/></NavLink>

                </div>
                <div className='content-info'>
                   <NavLink to='/main/Two long weeks I wandered'> <h2 className='style-middleTitle'>Two long weeks I wandered</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/Two long weeks I wandered'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/I shouted above the sudden noise'>  <img src='./img-news/Link-img/link-4.jpg'/></NavLink>

                </div>
                <div className='content-info'>
                    <NavLink to='/main/I shouted above the sudden noise'>  <h2 className='style-middleTitle'>I shouted above the sudden noise.</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/I shouted above the sudden noise'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/At daybreak of the fifteenth day of my search'>  <img src='../img-news/Link-img/link-10.jpg'/></NavLink>

                </div>
                <div className='content-info'>
                    <NavLink to='/main/At daybreak of the fifteenth day of my search'>   <h2 className='style-middleTitle'>At daybreak of the fifteenth day of my search</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/At daybreak of the fifteenth day of my search'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <div className='content'>
                <div className='content-img'>
                    <NavLink to='/main/The great excavation lay far from the plaza'>  <img src='../img-news/Link-img/link-3.jpg'/></NavLink>

                </div>
                <div className='content-info'>
                    <NavLink to='/main/The great excavation lay far from the plaza'>  <h2 className='style-middleTitle'>The great excavation lay far from the plaza</h2></NavLink>
                    <p className='style-smallText '>
                        <span className='border-bottom'>APRIL 11, 2019</span>
                        <span className='margin-rightLeft'>•</span>
                        <NavLink className='style-smallText' to='/category/Featured'>FEATURED ,</NavLink>
                        <NavLink className='style-smallText' to='/category/Food'> FOOD </NavLink>
                    </p>
                    <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                        vantage and continually looking a…</p>
                    <NavLink to={'/main/The great excavation lay far from the plaza'} className='read-more'>Read more</NavLink>
                </div>
            </div>
            <Button className='style-btn-more-post margin-auto '>
                <NavLink className='text-decoration-none color-white-2' to={'/news'}>more Post</NavLink>
            </Button>
        </div>
        </div>
    );
};

export default Section_LatestStories;