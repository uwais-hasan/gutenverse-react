import React from 'react';
import SectionPostInformationCoverRs from "./SectionPostInformationCoverRs";
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'

import SectionArticlesRsCover from "./SectionArticlesRSCover";
import SectionDetailsImgCoverRs from "./SectionDetailsImgCoverRs";
import SectionArticlesPartTwoRsCover from "./SectionArticlesPartTwoRsCover";
import SectionCoverImagesInformationRs from "./SectionCoverImagesInformationRs";
import SectionLeatherhedCoverRs from "./SectionLeatherhedCoverRs";
import SectionArticlesWithImagesInfo from "./Section-ArticlesWithImagesInfo";
import SectionArticlesWithMarkRs from "./SectionArticlesWithMarkRs";
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
import RsSectionStoreCover from "./RsSectionStoreCover";
import RsSectionRelatedPostsCover from "./RsSectionRelatedPostsCover";

const RsCoverImage = () => {
    return (
        <div className='section-rs-cover'>
            <SectionPostInformationCoverRs/>
            <div className='divideSections flex-row-media-column justify-spaceAround margin-60-12-30'>
                <div className='sections-content width-70-100'>
                    <SectionArticlesRsCover/>
                    <SectionDetailsImgCoverRs/>
                    <SectionArticlesPartTwoRsCover/>
                  <SectionCoverImagesInformationRs/>
                    <SectionLeatherhedCoverRs/>
                    <SectionArticlesWithImagesInfo/>
                    <SectionArticlesWithMarkRs/>
                    <div className='update-form-sign'>
                        <SingUp/>
                    </div>
                    <RsSectionStoreCover/>
                    <RsSectionRelatedPostsCover/>
                    <SectionAddComment />
                </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>
    );
};

export default RsCoverImage;