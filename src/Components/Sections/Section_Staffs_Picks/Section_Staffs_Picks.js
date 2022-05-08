import React from 'react';

import './Section_Staffs_Picks.css'
import {NavLink} from "react-router-dom";

const Section_Staffs_Picks = () => {
    return (
        <div className='container-home'>
            <span className='span-above-title'>You have to read this!</span>
            <h2 className='style-app-title margin-bottom-20'>Staff's Picks</h2>

            <div className='Section_Staff_picks flex-row'>
                <div className='content-RowOne'>
                    <div className='content-img'>
                       <NavLink to='/main/What art thrusting that thief-catcher into my face?'> <img src='./img-news/big-height.jpg'/></NavLink>
                    </div>
                    <div className='content-info'>
                        <NavLink to='/main/What art thrusting that thief-catcher into my face?'><h2 className='style-middleTitle'>What art thrusting that thief-catcher into my face?</h2></NavLink>
                        <p className='style-smallText '><span className='border-bottom'>August 15,</span> 2018,featuce 1,life style,photo</p>
                        <p className='style-middleTitle-2 padding-top-20'>I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down …
                        </p>
                        <p className='read-more'>Read more</p>
                    </div>
                </div>
                <div className='content-RowTwo flex-column '>
                    <div className='content-RowTwo width_100 flex-row  '>
                        <NavLink className='width_100' to='/main/Post with tall image – Your task is to watch the goats'><img className='width_50' src='./img-news/short-7.jpg'/></NavLink>
                       <div className='flex-column flex-nowrap m-t'>
                           <NavLink to='/main/Post with tall image – Your task is to watch the goats'>   <p className='style-middleTitle-3 margin-none'>Post with tall image – Your task is to watch the goats</p></NavLink>
                           <p className='style-smallText '><span className=''>August 15,</span> 2018,featuce 1,life style,photo</p>
                           <p className='style-middleTitle-2 '>I began walking, therefore, in a big curve, seeking some point of
                               vantage and continually looking a…</p>
                       </div>
                    </div>
                    <div className='content-RowTwo width_100 flex-row  '>
                       <NavLink className='width_100' to='/news'> <img className='width_50' src='./img-news/short-8.jpg'/></NavLink>
                        <div className='flex-column flex-nowrap m-t'>
                            <p className='style-middleTitle-3 margin-none'>Post with tall image – Your task is to watch the goats</p>
                            <p className='style-smallText '><span className=''>August 15,</span> 2018,featuce 1,life style,photo</p>
                            <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                                vantage and continually looking a…</p>
                        </div>
                    </div>
                    <div className='content-RowTwo width_100 flex-row  '>
                        <NavLink className='width_100' to='/news'>   <img className='width_50' src='./img-news/short-9.jpg'/></NavLink>
                        <div className='flex-column flex-nowrap m-t'>
                            <NavLink to='/news'>   <p className='style-middleTitle-3 margin-none'>Post with tall image – Your task is to watch the goats</p></NavLink>
                            <p className='style-smallText '><span className=''>August 15,</span> 2018,featuce 1,life style,photo</p>
                            <p className='style-middleTitle-2'>I began walking, therefore, in a big curve, seeking some point of
                                vantage and continually looking a…</p>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Section_Staffs_Picks;