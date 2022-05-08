import React from 'react';
import SwiperHeader from "../../Components/SwiperHeader/SwiperHeader";
import Section_LatestStories from "../../Components/Sections/Section_Latest Stories/Section_Latest Stories";
import Section_Staffs_Picks from "../../Components/Sections/Section_Staffs_Picks/Section_Staffs_Picks";

import SectionSignup_print from "../../Components/Sections/Section-Signup_print/Section-Signup_print";
import SectionInteresting_World from "../../Components/Sections/Section-Interesting_World/Section-Interesting_World";
import Section_love_writing from "../../Components/Sections/Section_love_writing/Section_love_writing ";

import './Home.css'
const Home = () => {
    return (
        <div className='padding-top-50'>
           <SwiperHeader/>
            <Section_LatestStories/>
            <Section_Staffs_Picks/>
            <SectionSignup_print/>
            <SectionInteresting_World/>
            <Section_love_writing/>
        </div>
    );
};

export default Home;