import React from 'react';



import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'
import SectionPostInformationHeroRl from "./Section-PostInformationHero-RL";
import SectionDetailsImgHeroRl from "./Section-DetailsImg-hero-RL";
import SectionAritclesRl from "./Section-Aritcles-RL";
import SectionLeatherheadHeroRl from "./SectionLeatherhead-Hero-RL";
import SectionArticlesWithImagesHeroInfoRl from "./SectionArticlesWithImages-Hero-Info-RL";
import SectionArticlesWithMarkHeroRl from "./SectionArticlesWithMark-Hero-RL";
import SectionMoreImgHeroRL from "./Section-MoreImg-Hero-RL";
import SectionArticlesPartTwoHeroRl from "./SectionArticlesPartTwo-Hero-RL";
import SectionArticlesWithImagesInfoPartTwoRl from "./SectionArticlesWithImagesInfoPartTwoRL";
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
import RlSectionStoreHero from "./RLSectionStoreHero";
import RlSectionRelatedPostsHero from "./RLSectionRelatedPostsHero";

const LeHeroImage = () => {
    return (
        <div className='section-le-hero'>
            <SectionPostInformationHeroRl/>
            <div className='divideSections flex-row-media-column-reverse justify-spaceAround margin-60-12-30'>
                <div className='sections-content width-70-100'>
                    <SectionAritclesRl/>
                    <SectionDetailsImgHeroRl/>
                    <SectionMoreImgHeroRL/>
                    <SectionArticlesPartTwoHeroRl/>
                    <SectionArticlesWithImagesHeroInfoRl/>
                    <SectionLeatherheadHeroRl/>
                    <SectionArticlesWithImagesInfoPartTwoRl/>
                    <SectionArticlesWithMarkHeroRl/>
                    <div className='update-form-sign'>
                        <SingUp/>
                    </div>
                    <RlSectionStoreHero/>
                    <RlSectionRelatedPostsHero/>
                    <SectionAddComment />
                </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>
    );
};

export default LeHeroImage;