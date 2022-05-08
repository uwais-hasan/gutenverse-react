import React from 'react';

import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'

import SectionPostInformationClassicRs from "./Section-PostInformationClassicRs";
import SectionLeatherheadRs from "./Section-Leatherhead-Rs";
import SectionArticlesRs from "./Section-Articles-Rs";
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
import EmbedYoutube from "./EmbedYoutube";
import RsSectionStoreClassic from "./RsSectionStoreClassic";
import RsSectionRelatedPostsClassic from "./RsSectionRelatedPostsClassic";

const RsClassic = () => {
    return (
        <div className='section-rs-classic'>
            <div className='divideSections flex-row-media-column justify-spaceAround margin-60-12-30'>
                <div className='sections-content width-70-100'>
                    <SectionPostInformationClassicRs/>
                    <SectionLeatherheadRs/>
                    <EmbedYoutube/>
                    <SectionArticlesRs/>
                    <div className='update-form-sign'>
                        <SingUp/>
                    </div>
                    <RsSectionStoreClassic/>
                    <RsSectionRelatedPostsClassic/>
                    <SectionAddComment />
                </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>

    );
};

export default RsClassic;