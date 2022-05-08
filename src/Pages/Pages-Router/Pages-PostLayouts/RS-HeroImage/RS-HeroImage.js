import React from 'react';
import SectionPostInformationWsHeroRs from "./SectionPostInformationWsHeroRS";
import SectionArticlesRSHero from "./Section-Articles-RS-hero";
import './RS-HeroImage.css'
import SectionSoundCloud from "./Section-SoundCloud";
import SectionArticlesPartTwoRsHero from "./Section-ArticlesPartTwo-RS-hero";
import SectionDetailsImg from "./Section-DetailsImg";
import SingUp from "../../../../Components/SingUp/SingUp";

import SectionAddComment from '../WS-HeroImage/Section-AddComment'

import SectionLeatherhedRsHero from "./Section-Leatherhed-RS-hero";
import RsSectionRelatedPostsHero from "./RS-SectionRelatedPosts-Hero";
import RsSectionStoreHero from "./RS-SectionStore-Hero";
import './RS-HeroImage.css'
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
const RsHeroImage = () => {
    return (
        <div className='section-rs-hero'>
            <SectionPostInformationWsHeroRs/>
            <div className='divideSections flex-row-media-column justify-spaceAround margin-60-12-30'>
               <div className='sections-content width-70-100'>
                 <SectionArticlesRSHero/>
                   <SectionSoundCloud/>
                   <SectionArticlesPartTwoRsHero/>
                   <SectionDetailsImg/>
                  <SectionLeatherhedRsHero/>
                   <div className='update-form-sign'>
                       <SingUp/>
                   </div>
                   <RsSectionStoreHero/>
                <RsSectionRelatedPostsHero/>
                   <SectionAddComment />
               </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>
    );
};

export default RsHeroImage;
// max-width: 700px;
// margin: 30px auto 20px;